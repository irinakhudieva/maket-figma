import React, { useState } from 'react'
import Button from './Button'
import SideForm from './SideForm';
import Form from './Form';

const Content = () => {
    const [visible, setVisible] = useState(false);

    return (
        <main className='content'>
            <h1 className='content__title'>
                Создаю условия 
                <br /> 
                для вашего успеха
            </h1>
            <div className='content__text'>
                <p>Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий</p>
                <p className='text-mobile'>Ваш успех зависит от ваших действий</p>
            </div>
        
            <div className='content__button-group'>
                <Button textMobile='Записаться' white='white' handleSubmit={() => setVisible(true)}>
                    Записаться на консультацию
                </Button>
                <Button textMobile='Консультация' dark='dark' handleSubmit={() => setVisible(true)}>
                    Бесплатная консультация
                </Button>
            </div>
            <SideForm visible={visible} setVisible={setVisible}>
                <Form />
            </SideForm>
        </main>
    )
}

export default Content
