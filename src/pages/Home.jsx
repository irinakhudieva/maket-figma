import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Quantity from '../components/Quantity'
import Percent from '../components/Percent'


const Home = () => {
  return (
      <div className='container'>
          <Header />
          <Content />
          <div className='container_add-info'>
            <Quantity />
            <Percent />
          </div>
      </div>
  )
}

export default Home
