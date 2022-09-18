import '../App.css';
import React, { useState } from 'react';
import UploadButton from '../components/UploadButton'
import { Typography } from 'antd';
import SummaryPage from './SummaryPage';
import Loader from '../components/Loader';

const UploadPage = () => {
  const [loaded, setLoaded] = useState(true)
  const [data, setData] = useState(null)

  if (data) return <SummaryPage data={data} />

  return (
    <div style={{ display: 'flex', flexDirection: 'row', background: '#1A1A1D' }}>
      <Typography.Title
        level={2}
        style={{ color: '#C3073F', marginLeft: 32, width: '60%', height: '100vh', display: 'flex',  justifyContent:'center', alignItems:'center' }}
      >
        Upload the audio from your lecture
      </Typography.Title>
      <div
        style={{ width: '40%', height: '100vh', display: 'flex',  justifyContent:'center', alignItems:'center' }}
      >
        {loaded
          ? <UploadButton setLoaded={setLoaded} setData={setData} />
          : <Loader />}
      </div>
    </div>
  )
}

export default UploadPage;