import React, { useState } from 'react'
import Button from './Button'
import check from '../assets/check.png'
import logo from '../assets/logo.png'

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    const [checked, setChecked] = useState(true);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({name, number, checked}));
        
        if(!!name && !!number) {
           setSent(true);  
        } else {
            setError('Заполните форму')
        }
    }

    return (
        <>
            {sent ? (
                <div className='after-sent'>
                    <h1>Спасибо за заявку</h1>
                    <h2>Я обязательно свяжусь с вами в ближайшее время.</h2>
                    <img src={logo} alt='Logo' />
                </div>
            ) : (
                <form className='form'>
                    <h1>Закажите обратный звонок</h1>
                    <input 
                        type="text" 
                        value={name} 
                        placeholder='Имя'
                        required
                        onChange={(e) => setName(e.target.value)}
                        className=''
                    />
                    <input 
                        type="phone" 
                        value={number}
                        placeholder='Телефон'
                        required
                        onChange={(e) => setNumber(e.target.value)}
                        className=''
                    />
                    <div className='checkbox_container'>
                        <div className='checkbox' onClick={() => setChecked(!checked)}>
                            {checked && (
                                <img src={check} alt='Icon check' className='check'/>
                            )}
                        </div>
                        <p>Согласен на сохранение и обработку персональных данных</p>
                    </div>
                    {error && <div>{error}</div>}
                    <Button dark='dark' textMobile='Заказать звонок' handleSubmit={handleSubmit} >
                        Заказать обратный звонок
                    </Button>
                </form> 
            )}
        </>   
    )
}

export default Form
