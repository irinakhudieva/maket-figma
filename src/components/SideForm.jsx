import React from 'react'
import close from '../assets/close.png'

const SideForm = ({children, visible, setVisible}) => {
    
    const rootClasses = ['sideform']
    
    if(visible) {
      rootClasses.push('active')
    }

    return (
      <div className={rootClasses.join(' ')}>
           <div className='sideform__content' onClick={e => e.stopPropagation()}>
                <img src={close} alt='Icon close' onClick={() => setVisible(false)} className='close'/>
                {children}
          </div> 
    </div>
    )
}

export default SideForm
