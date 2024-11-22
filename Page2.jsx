import React from 'react'

export const Page2=(props)=> {
    console.log(props.name);
    
  return (
    <div className={`w-full h-screen bg-black ${props.name} flex`}>
       <div className='w-[50%] h-full'>
       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M33.8,-66.5C39.5,-55.2,37,-37.5,38.6,-25.4C40.2,-13.2,46,-6.6,49.5,2C52.9,10.6,54.1,21.2,52.2,32.9C50.3,44.6,45.4,57.3,36.2,57.1C27,56.9,13.5,43.8,3.2,38.2C-7.1,32.7,-14.1,34.7,-23.9,35.2C-33.6,35.8,-46.1,34.8,-54.3,28.6C-62.5,22.5,-66.5,11.3,-70.5,-2.3C-74.5,-15.9,-78.6,-31.8,-69.1,-35.8C-59.7,-39.8,-36.8,-32,-23.1,-38.7C-9.3,-45.3,-4.7,-66.4,4.7,-74.6C14,-82.7,28.1,-77.8,33.8,-66.5Z" transform="translate(100 100)" />
</svg>
       </div>
       <div className="w-[50%] h-screen flex flex-col justify-center"> <h1 className='text-white text-[5vw]'>The Cocacola</h1>
       <p className='w-[80%] text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aliquid unde mollitia praesentium quos est soluta tempore neque harum reprehenderit fuga accusantium, dolore ipsam reiciendis tempora nisi culpa quia velit perferendis. Dolore id ad facere velit tempore ipsum doloremque corrupti, neque voluptas fugiat nisi magni adipisci temporibus tempora officiis, eaque quia molestiae alias consectetur! Sit, saepe repudiandae voluptate molestiae delectus iure sed exercitationem impedit tenetur voluptas unde earum quam eaque ut nesciunt excepturi similique eligendi ducimus magni et harum fuga! Numquam laudantium consequuntur vero doloribus commodi, porro inventore quaerat quos cumque illum sint hic assumenda laboriosam alias voluptatem nesciunt. Molestiae!</p></div>
    </div>
  )
}

export default Page2