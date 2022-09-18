import { Typography, Divider } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

const SummaryPage = ({ data }) => (
    <div style={{ marginTop: 32, marginBottom: 32 }}>
        <Typography.Title level={1} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            Summary
        </Typography.Title>
        <ul style={{ margin: 32 }}>
            {data.chapters.map((item) => (
                <li>
                    <Paragraph>{item.headline}</Paragraph>
                </li>
            ))}
        </ul>
        <Divider />
        <Typography.Title level={3} style={{ marginLeft: 16 }}>
            Full Text Transcription
        </Typography.Title>
        <Paragraph style={{ margin: 32 }}>{data.transcript}</Paragraph>
        <Divider />
    </div>
)

export default SummaryPage