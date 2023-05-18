// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');
const readline = require('readline');


export default async function handler(req, res) {
    
  const usermail=req.body.mail;
  const usertext=req.body.text;
  const phoneno=req.body.phoneno;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:true,
    auth: {
      user: 'krunalpabari2012@gmail.com',
      pass: 'uoshskcstpxcimau',
    },
  });
  
  // create email options
  const mailOptions = {
    from: usermail,
    to: 'krunalpabari2012@gmail.com',
    subject: 'User Query',
    text: usertext+"\nMobile No"+phoneno
  };
  
  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send("error");
    } else {
      console.log('Email sent: ' + info.response);
      alert("Thanks for Contacting Us. We Will Contact You Soon");
      res.send("success");
    }
  });
}
