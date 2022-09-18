import { Divider, List, Typography } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

const SummaryPage = ({ data }) => (
    <div>
        <Typography.Title level={1}>
            Summary
        </Typography.Title>
        <Paragraph>{data.transcript}</Paragraph>
        <Divider />
        <ul
            style={{
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            {data.chapters.map((item) => (
                <li>
                    <Paragraph>{item.headline}</Paragraph>
                </li>
            ))}
        </ul>
            {/* {data.chapters.map((item) => (
                <div>
                    <Typography.Title level={3}>
                        {item.gist}
                    </Typography.Title>
                    <Paragraph>
                        {item.headline}
                    </Paragraph>
                </div>
            ))} */}
    </div>
)

export default SummaryPage