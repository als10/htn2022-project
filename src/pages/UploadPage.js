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
        level={1}
        style={{ color: '#FFFFFF', marginLeft: 32, width: '50%', height: '100vh', display: 'flex',  justifyContent:'center', alignItems:'center' }}
      >
        {loaded ? 'Upload the audio from your lecture' : 'Generating summary...'}
      </Typography.Title>
      <div
        style={{ width: '50%', height: '100vh', display: 'flex',  justifyContent:'center', alignItems:'center' }}
      >
        {loaded
          ? <UploadButton setLoaded={setLoaded} setData={setData} />
          : <Loader />}
      </div>
    </div>
  )
}

export default UploadPage;