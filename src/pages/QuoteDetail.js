import React from 'react'
import { useParams } from 'react-router-dom'

const QuoteDetail = () =>
{
    const params = useParams()

    return (
        <>
            <h1>Quotes in detail</h1>
            <p>{params.quoteId}</p>
        </>
    )
}

export default QuoteDetail