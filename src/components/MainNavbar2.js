import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Foot from './Foot';
import { useState } from 'react';
import { useRef } from 'react';
export default function MainNavbar2(props) {
  const moveToFooter=()=>{
    window.scrollTo({top: props.contact.current.offsetTop, behavior:'smooth'})
  }
  const moveToCareer=()=>{
    window.scrollTo({top:props.career.current.offsetTop, behavior:'smooth'})
  }
  const moveToAbout=()=>{
    window.scrollTo({top:props.about.current.offsetTop,behavior:'smooth'})
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark ">
   
   <a className="navbar-brand ps-4   " >
 <img     
             alt=""
             src="/Temp. Home.png"
             width="120"
             height="35"
             className="d-inline-block align-top img-fluid "
           />
 </a>
     <button
       className="navbar-toggler me-3 collapsed d-flex d-lg-none flex-column justify-content-around"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span className="toggler-icon top-bar" />
       <span className="toggler-icon middle-bar" />
       <span className="toggler-icon bottom-bar" />
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav ms-auto pe-5">
         <li className="nav-item">
           <a
             className="nav-link active underline pe-4"
             aria-current="page"
            
             onClick={moveToAbout}
             style={{cursor:'pointer'}}
           >
             ABOUT
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link active underline pe-4"  onClick={moveToCareer} style={{cursor:'pointer'}}>
             CAREER
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link active underline pe-4"  onClick={moveToFooter} style={{cursor:'pointer'}}>
             CONTACT US
           </a>
         </li>
       </ul>
     </div>
  
 </nav>


    </>
    )
}
