import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
import { pipeline } from '../assembly_ai';

const { Dragger } = Upload;

const UploadButton = ({ setLoaded, setData }) => {
  const props = {
    name: 'file',
    style: { height: '100vh', width: '100%', background: '#4E4E50' },
    beforeUpload: async (file) => {
      setLoaded(false)
      const data = await pipeline(file)
      setLoaded(true)
      setData(data)
      console.log(data)
      if (!data) message.error(`File summarization failed.`)
      return false
    },
    onChange(info) {
      const { status } = info.file;
  
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon" style={{ margin: 32 }}>
        <InboxOutlined style={{ color: '#C3073F', fontSize: 72 }} />
      </p>
      <p className="ant-upload-text" style={{ margin: 32, fontSize: 18, color: '#950740' }}>
        Click or drag file to this area to upload
      </p>
    </Dragger>
  )
};

export default UploadButton;