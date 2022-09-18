import axios from "axios"

const API_KEY_ASSEMBLYAI = 'cd73c652ca7a4e6282e588cc8d5cee6d'

const upload_file = async (file) => {
  const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
      authorization: API_KEY_ASSEMBLYAI,
    },
  });
  const result = await assembly.post("/upload", file)
  return result ? result.data.upload_url : ''
}

const transcribe = async (audio_url) => {
  const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: API_KEY_ASSEMBLYAI,
        "content-type": "application/json",
    },
  });
  const result = await assembly.post("/transcript", { audio_url, auto_chapters: true })
  return result ? result.data.id : ''
}

const poll = async (transcript_id) => {
  const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: API_KEY_ASSEMBLYAI,
        "content-type": "application/json",
    },
  });
  const result = await assembly.get(`/transcript/${transcript_id}`)
  return result ? result.data : null
}

export const pipeline = async (file) => {
  const audio_url = await upload_file(file)
  if (!audio_url) return null
  const transcript_id = await transcribe(audio_url)
  if (transcript_id) {
    while (true) {
      const result = await poll(transcript_id)
      if (result && result.status === 'completed') {
        return {
            transcript: result.text,
            chapters: result.chapters,
            highlights: result.auto_highlights_result
          }
      } else if (result && result.status === 'error') {
        return null
      }
      console.log('Still processing! Trying again after 60 seconds...')
      await new Promise((resolve) => setTimeout(resolve, 60000))
    }
  }
}