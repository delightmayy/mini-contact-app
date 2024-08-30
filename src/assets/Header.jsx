import React from 'react'
import AppTitle from './homepage/component/AppTitle'

const Header = ( {title}) => {
  return (
    <section className='sticky top-0 z-10 pb-1 bg-gray-500 '>
        <AppTitle title ={title}/>
    </section>
  )
}

export default Header