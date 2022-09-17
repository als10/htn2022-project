import React from 'react'

const data = {
    transcript: 'Hello, this is a lecture. This is not a tutorial. OKay bye. Hello, this is a lecture. This is not a tutorial. OKay bye. Hello, this is a lecture. This is not a tutorial. OKay bye.',
    chapters: [
        {
            title: 'First Chapter',
            summary: 'First chapter talks about the history behind something.'
        },
        {
            title: 'Second Chapter',
            summary: 'Second chapter is small.'
        }
    ]
}

const SummaryPage = () => (
    <div>
        <div>{data.transcript}</div>
        {data.chapters.map((item) => (
            <div>
                <strong>{item.title}</strong>
                <div>{item.summary}</div>
            </div>

        ))}
    </div>
)

export default SummaryPage