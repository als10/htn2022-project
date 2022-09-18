from pprint import pprint
from time import sleep
import requests

API_KEY_ASSEMBLYAI = 'cd73c652ca7a4e6282e588cc8d5cee6d'

upload_endpoint = 'https://api.assemblyai.com/v2/upload'
transcript_endpoint = 'https://api.assemblyai.com/v2/transcript'

headers_auth_only = {
  'authorization': API_KEY_ASSEMBLYAI
}
headers = {
  'authorization': API_KEY_ASSEMBLYAI,
  'content-type': 'application/json'
}

BATCH_SIZE = 5 * 1024 * 1024 # 5 MB

def upload_file(filename):
  def read_file(filename):
    with open(filename, 'rb') as f:
      while True:
        data = f.read(BATCH_SIZE)
        if not data: return
        yield data

  upload_response = requests.post(
    upload_endpoint,
    headers = headers_auth_only,
    data = read_file(filename)
  )

  pprint(upload_response.json())
  return upload_response.json()['upload_url']

def transcribe(audio_url):
  transcript_request = {
    'audio_url': audio_url,
    'auto_chapters': True,
    'auto_highlights': True
  }

  transcript_response = requests.post(
    transcript_endpoint,
    json = transcript_request,
    headers = headers
  )

  pprint(transcript_response.json())
  return transcript_response.json()['id']

def poll(transcript_id):
  polling_endpoint = f'{transcript_endpoint}/{transcript_id}'
  polling_response = requests.get(
    polling_endpoint,
    headers = headers
  )

  if polling_response.json()['status'] == 'completed':
    return {
      'transcript': polling_response.json()['text'],
      'chapters': polling_response.json()['chapters'],
      'highlights': polling_response.json()['auto_highlights_result']
    }
  return False

def pipeline(filename):
  audio_url = upload_file(filename)
  transcribe_id = transcribe(audio_url)
  while True:
    result = poll(transcribe_id)
    if result: return result
    print('Still processing! Trying again after 60 seconds...')
    sleep(60)

pipeline('./test_short.m4a')
