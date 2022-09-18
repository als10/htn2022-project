import { Typography, Divider } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

const prettyTime = (ms) => {
    const s = Math.floor(ms / 1000)
    const min = Math.floor(s / 60)
    const hour = Math.floor(min / 60)
    if (hour > 0) {
        return `${hour} hr ${min - hour * 60} min ${s - min * 60} s`
    } else if (min > 0) {
        return `${min} min ${s - min * 60} s`
    } else return `${s} s`
}

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
        <Divider style={{ background: 'gray' }} />
        <Typography.Title level={3} style={{ color: 'white', marginLeft: 32, marginRight: 32 }}>
            Chapters
        </Typography.Title>
        <ul style={{ margin: 32 }}>
            {data.chapters.map((item) => (
                <li style={{ color: 'white' }}>
                    <Paragraph style={{ color: 'white' }}>{prettyTime(item.start)} to {prettyTime(item.end)}: <strong>{item.gist}</strong> <br /> {item.summary}</Paragraph>
                </li>
            ))}
        </ul>
        <Divider style={{ background: 'gray' }} />
        <Typography.Title level={3} style={{ color: 'white', marginLeft: 32, marginRight: 32 }}>
            Full Text Transcription
        </Typography.Title>
        <Paragraph style={{ color: 'white', margin: 32 }}>{data.transcript}</Paragraph>
        <Divider />
    </div>
)

export default SummaryPage