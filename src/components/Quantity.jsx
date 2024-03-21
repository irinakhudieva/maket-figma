import React from 'react'

const Quantity = () => {

    const getQuantity = () => {
        const dateNow = new Date(); 
        const day = dateNow.getDate()
        const month = dateNow.getMonth()
        const year = dateNow.getFullYear()
        const sumDate = `${day}${month + 1}${year}`.split('').reduce((sum, item) => sum + Number(item), 0)
        return sumDate;
    }

    return (
        <div className='add-info'>
            <h1>{getQuantity()}+</h1>
            <p>техник для достижения целей</p>
            <p className='text-mobile'>техник</p>
        </div>
    )
}

export default Quantity
