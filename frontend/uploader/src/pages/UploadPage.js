import '../App.css';
import React, { useState } from 'react';
import UploadButton from '../components/UploadButton'
import { Typography } from 'antd';
import { Waveform } from '@uiball/loaders';
import SummaryPage from './SummaryPage';

const UploadPage = () => {
  const [loaded, setLoaded] = useState(true)
  const [data, setData] = useState(null)

  if (!loaded) {
    return (
      <div style={{ width: '50%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
        <Waveform 
          size={72}
          lineWeight={3.5}
          speed={1} 
          color="black" 
        />
      </div>
    )
  } 

  if (data) return <SummaryPage data={data} />

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography.Title level={1} style={{ width: '50%' }}>
        Upload the audio from your lecture
      </Typography.Title>
      <UploadButton setLoaded={setLoaded} setData={setData} />
    </div>
  )
}

export default UploadPage;