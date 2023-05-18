import React from 'react'

export default function Video() {
  return (
    <>
    <div className='position-relative '>
    <video src='/video1.mp4'  autoPlay  loop muted style={{width:'100%'}} >
      
     </video>
     <div className='text-white position-absolute textbox container '>
       <div className='h2' style={{letterSpacing:'3px'}}>
     EASY. QUICK. CONVENIENT.      
       </div>
        <div className='h1 'style={{letterSpacing:'2px'}}>
        STAY CHARGED. STAY MOVING.
        </div>
        
        </div>
        </div>
     </>
  )
}
