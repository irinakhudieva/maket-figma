import React from 'react'
import vectorWhite from '../assets/vector-white.png'
import vectorDark from '../assets/vector-dark.png'

const Button = ({children, dark, white, textMobile, handleSubmit }) => {
  return (
    <div className='button_container'>
        <button className={`button_container-${white ?? dark}`} onClick={handleSubmit}>
            <span>{children}</span>
            <span className='text-mobile'>{textMobile}</span>
        </button>
        <button className={`button_container-btn_${white ?? dark}`} onClick={handleSubmit}>
            {white ? (
                <img src={vectorDark} alt='Vector Dark' />
            ) : (
                <img src={vectorWhite} alt='Vector White' />
            )}
        </button>
    </div>
  )
}

export default Button

