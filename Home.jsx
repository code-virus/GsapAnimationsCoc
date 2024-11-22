import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Page2 from './Page2'
import Page3 from './Page3'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const Home=()=> {
    useGSAP(()=>{
        let tl =gsap.timeline({scrollTrigger:{
            scroll:"body",
            trigger:".page2",
            start:"0% 98% ",
            end:"30% 60% ",
            scrub:2,
            markers:true
        }})
        tl.to(".can",{
            duration:2,
            left:"0",
            scale:.0,
            opacity:.0
        },"same")
        tl.to(".can3",{
            duration:2,
            top:"100vh",
            left:"0"
            
        },"same")
        tl.to(".can1",{
            duration:2,
            right:"0",
            scale:.0,
            opacity:"0"
        },"same")

    })
    useGSAP(()=>{
        let tl =gsap.timeline({scrollTrigger:{
            scroll:"body",
            trigger:".page3",
            start:"-10% 98% ",
            end:"40% 60% ",
            scrub:2,
            markers:true
        }})
        tl.to(".can3",{
            duration:2,
            top:"212vh",
            left:"32vw",
            width:"33vw",
            height:"64vh"
            
        })     
       

    })
    useGSAP(()=>{
        let tl =gsap.timeline({scrollTrigger:{
            scroll:"body",
            trigger:".page3",
            start:"-10% 98% ",
            end:"40% 60% ",
            scrub:2,
            markers:true
        }})
        tl.to(".cans",{
            duration:2,
            top:"-5vh",
            left:"0",
            opacity:1
          
            
        },"same")     
        tl.to(".caan",{
            duration:2,
            top:"-7vh",
            left:"0",
            opacity:1
          
            
        },"same")    
       

    })

  return (
    <div>
       <div className='w-full h-[92vh] bg-black flex justify-center items-center'>
<h1 className='absolute uppercase text-white text-[14vw] font-bold'>CocaCola</h1>
<img className=' can1 absolute h-[60%]' src="https://www.pngall.com/wp-content/uploads/15/Coke-Can-PNG-Image.png" alt="" />
<img className=' can absolute h-[60%]' src="https://www.pngall.com/wp-content/uploads/15/Coke-Can-PNG-Image.png" alt="" />
<img className=' can3 absolute h-[90%] z-50' src="https://www.pngall.com/wp-content/uploads/15/Coke-Can-PNG-Image.png" alt="" />

       </div>
       <Page2 name={"page2"} />
       <Page3 name={"page3"} can={"cans"} cans={"caan"}/>
    </div>
  )
}

export default Home