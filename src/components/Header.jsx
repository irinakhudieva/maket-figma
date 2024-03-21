import React from 'react'
import logo from '../assets/logo.png'
import iconPhone from '../assets/icon-phone.png'
import menu from '../assets/burger-menu.png'


const Header = () => {
  return (
    <header className='header'>
        <div className='header__logo'>
          <img src={logo} alt='Logo' />
        </div>
        <nav className='header__nav'>
          <ul>
            <li>Обо мне</li>
            <li>Наставничество</li>
            <li>Мероприятия</li>
            <li>Кейсы</li>
            <li>Отзывы</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div className='header__contact'>
          <div  className='header__contact-menu'>
            <img src={menu} alt='Icon Menu' />
          </div>
          <div  className='header__contact-icon'>
            <img src={iconPhone} alt='Icon Phone' />
          </div>
          <span className='header__contact-phone'>8-345-123-34-45</span>
        </div>
    </header>
  )
}

export default Header
