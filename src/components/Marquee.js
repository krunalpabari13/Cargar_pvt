import React from 'react'
import logo1 from '../../public/logo1.png'
export default function Marquee() {
  return (
    <>
    <h1 className='container text-white'>
        OUR ENDEVAROUS ARE  <span style={{borderBottom:'2px solid lightgreen',textDecoration:'none'}}>SUPPORTED BY</span>
    </h1>
    <div className="logos">
    <div className="logos-slide">
      <img src="./logos/logo1.png" />
      <img src="./logos/logo2.png" />
      <img src="./logos/logo3.png" />
      <img src="./logos/logo4.png" />
      <img src="./logos/logo5.png" />
      <img src="./logos/logo6.png" />
      <img src="./logos/logo7.png" />
    </div>

    <div className="logos-slide">
      <img src="./logos/logo1.png" />
      <img src="./logos/logo2.png" />
      <img src="./logos/logo3.png" />
      <img src="./logos/logo4.png" />
      <img src="./logos/logo5.png" />
      <img src="./logos/logo6.png" />
      <img src="./logos/logo7.png" />
    </div>
  </div>
  </>
  )
}
