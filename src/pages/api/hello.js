// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');
const readline = require('readline');


export default async function handler(req, res) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'krunalpabari2012@gmail.com',
      pass: 'Krunal@@@123'
    }
  });
  
  // create email options
  const mailOptions = {
    from: 'krunalpabari2012@gmail.com',
    to: 'krunalpabari13@gmail.com',
    subject: 'Node.js Email Test',
    text: 'hello'
  };
  
  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
















}
