import Link from 'next/link';
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
  
  {/* <form action="https://formsubmit.co/93458005a3998d260283964dc65d8308" method="POST">
        <h1 className="container text-white margin-top  ">LET'S CONNECT</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
            <input type="text" name="name" class="form-control" placeholder="Full Name" />
             </div> 

             <div className="col-lg-6 col-md-6 col-sm-12 mt-4"> 
              
            <input type="email" name="email" class="form-control" placeholder="Email Address" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
            <input type="phone" name="phone no" class="form-control" placeholder="Phoneno" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              
            <input type="text" name="message" class="form-control" placeholder="message" />
            </div>
          </div>
          <input type="hidden" name="_next" value="/Thankyou"></input>
          <div className="text-center">
          
          <button type="submit" className="btn  btn-success btn-lg col-6 text-white mt-4 " style={{margin:'auto',color:'lightgreen',borderRadius:'30px'}}>Submit Form</button>
          </div>
        </div> */}



        <div class="container">
  
  <form  action="https://formsubmit.co/67ef95e46796fc3b32187aac2341cae6" method="POST">
 
    <div class="form-group">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mt-4">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required></input>
          <input type="hidden" name="_next" value="https://cargar.in/Thankyou.html"  ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mt-4">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required></input>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mt-4">
          <input type="text" name="tel" class="form-control" placeholder="Phoneno" required></input>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mt-4">
          <input type="text" name="message" class="form-control" placeholder="Your Message"  required></input>
       
        </div>
      </div>
    
      <div className="text-center">    
          <button type="submit" className="btn  btn-success btn-lg col-6 text-white mt-4 " style={{margin:'auto',color:'lightgreen',borderRadius:'30px'}}>Submit Form</button>
      </div>
  </form>
</div>
</div>
     
    
  )
}
