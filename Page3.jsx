import React from 'react'

export const Page3=({name,can,cans})=> {
  return (
    <div className={ `w-full ${name}  bg-black h-screen flex justify-center items-center space-x-28 pt-32`}>
        <div className='w-[20%] relative h-[60%] bg-white rounded-2xl'> <img className={`w-[100%] absolute top-[-55vw] ${can} opacity-0`} src="https://www.pngplay.com/wp-content/uploads/15/Sprite-Can-No-Background.png" alt="" />
        <div className=' relative w-full flex flex-col items-center top-[19vw]'>
        <h1 className='text-[2vw] uppercase'>Fanta</h1>
        <button className='bg-[green] py-[.3vw] px-7 rounded-xl mt-4 text-white text-[1vw]'>Buy Now</button>
        </div>
        </div>
        <div className='w-[20%] h-[60%] bg-white rounded-2xl'>  <div className=' relative w-full flex flex-col items-center top-[19vw]'>
        <h1 className='text-[2vw] uppercase'>CocaCola</h1>
        <button className='bg-[green] py-[.3vw] px-7 rounded-xl mt-4 text-white text-[1vw]'>Buy Now</button>
        </div></div>

        <div className='w-[20%] h-[60%] bg-white rounded-2xl relative'> <img className={`w-[990px] h-[45vh] absolute top-[-55vw] left-[-50vw] ${cans} opacity-0`} src="https://imgs.search.brave.com/q-7JS1I-t8crZGFlWaK9QBcxQtGBX5dae8Z6ik2U1u8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTW91/bnRhaW4tRGV3LUNh/bi1QTkcucG5n" alt="" />  <div className=' relative w-full flex flex-col items-center top-[19vw]'>
        <h1 className='text-[2vw] uppercase'>Mountain Dew</h1>
        <button className='bg-[green] py-[.3vw] px-7 rounded-xl mt-4 text-white text-[1vw]'>Buy Now</button>
        </div></div>
       
        
    </div>
  )
}

export default Page3