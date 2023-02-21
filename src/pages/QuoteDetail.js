import React from 'react'
import { useParams } from 'react-router-dom'

const QuoteDetail = () =>
{
    const params = useParams()

    return (
        <h1>Quotes in detail</h1>
    )
}

export default QuoteDetail