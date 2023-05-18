import React from 'react'
export default function Foot() {
  return (
    <div><a className="navbar-brand ps-4   " href="#">
    <img
      alt=""
      src="/Temp. Home.png"
      width="140"
      height="50"
      className=" align-top img-fluid "
    />
  </a>
  
  <div>
        <h1 className="container text-white margin-top  ">LET'S CONNECT</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='text' className='form-control' placeholder='UserName'></input>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='email' className='form-control' placeholder='Enter Your Email'></input>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='text' className='form-control' placeholder='Entery Your PhoneNo'></input>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='text' className='form-control' placeholder='Type Your Message'></input>
            </div>
          </div>

          <div className="text-center">
          <button className="btn  btn-success btn-lg col-6 text-white mt-4 " type="button" style={{margin:'auto',color:'lightgreen',borderRadius:'30px'}}>Submit</button>
          </div>
        </div>
      </div>
  </div>
  )
}
