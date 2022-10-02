import React from 'react'
import logo from '../image.jpg'

function Error() {
  return (
    <div className='main-2 bg-[#ffffff]'>
        <img src={logo} className='h-96'/>
        <div className='w-[19rem]'>
          <h1 className='text-5xl text-[#007dfe]'>404</h1>
          <h1 className='text-2xl mt-2'>Oops! Looks like there is<br/> no such <span>Coin.</span></h1>
          <h1 className='text-xl mt-4 '>You may have mistyped or<br/>page may have removed.</h1>
        </div>
    </div>
  )
}

export default Error