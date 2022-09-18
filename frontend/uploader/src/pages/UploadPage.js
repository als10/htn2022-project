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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography.Title level={1} style={{ width: '50%' }}>
        Upload the audio from your lecture
      </Typography.Title>
      <div style={{ width: '50%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
        {loaded
          ? <UploadButton setLoaded={setLoaded} setData={setData} />
          : <Loader />}
      </div>
    </div>
  )
}

export default UploadPage;