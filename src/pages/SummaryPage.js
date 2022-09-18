import { Typography, Divider } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

const SummaryPage = ({ data }) => (
    <div style={{ paddingTop: 32, paddingBottom: 32, background: '#1A1A1D' }}>
        <Typography.Title level={1} style={{ color: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            Summary
        </Typography.Title>
        <ul style={{ margin: 32 }}>
            {data.chapters.map((item) => (
                <li style={{ color: 'white' }}>
                    <Paragraph style={{ color: 'white' }}>{item.headline}</Paragraph>
                </li>
            ))}
        </ul>
        <Divider />
        <Typography.Title level={3} style={{ color: 'white', marginLeft: 32, marginRight: 32 }}>
            Full Text Transcription
        </Typography.Title>
        <Paragraph style={{ color: 'white', margin: 32 }}>{data.transcript}</Paragraph>
        <Divider />
    </div>
)

export default SummaryPage