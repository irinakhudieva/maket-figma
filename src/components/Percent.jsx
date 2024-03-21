import React, { useEffect } from 'react'
import { useState } from 'react'

const Percent = () => {
    const [percent, setPercent] = useState(0);

    const getPercent = async () => {
        const {Valute: {GBP: {Previous: res}}} = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(res => res.json())
        setPercent(res);
    } 

    useEffect(() => {
        getPercent()
    }, [])


    return (
        <div className='add-info'>
            <h1>{Math.round(percent)}%</h1>
            <p>увеличение личной продуктивности</p>
            <p className='text-mobile'>продуктивности</p>
        </div>
    )
}

export default Percent
