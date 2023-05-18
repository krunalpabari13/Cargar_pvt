import React from 'react'
export default function Foot() {
  let submit= async (e)=>{
    // e.preventDefault();
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const message=document.getElementById('message').value;
    if(email=='' || phone=='' || message=='')
    {
    alert("Please Provide All The Necessary Details.");
    }
    else{
    const response=     fetch("/api/hello",{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({mail:email,phoneno:phone,text:message}),
    });
      alert("Thanks for contacting us. We will contact you soon");
  }

  }
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
  
  <form onSubmit={submit}>
        <h1 className="container text-white margin-top  ">LET'S CONNECT</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='text' className='form-control' placeholder='UserName' ></input>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='email' className='form-control' placeholder='Enter Your Email' id='email'></input>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='text' className='form-control' placeholder='Entery Your PhoneNo' id='phone'></input>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
              <input type='text' className='form-control' placeholder='Type Your Message' id='message'></input>
            </div>
          </div>

          <div className="text-center">
          <input className="btn  btn-success btn-lg col-6 text-white mt-4 " type="submit" style={{margin:'auto',color:'lightgreen',borderRadius:'30px'}}></input>
          </div>
        </div>
      </form>
  </div>
  )
}
