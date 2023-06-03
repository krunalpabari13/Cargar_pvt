import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const Thankyou = () => {
  return (<>
    <Head>
    <title>ThankYou</title>
    <meta name="description" content='cargar is a charge as a service platform which provide on-demand ev-charging'></meta>
      <meta name="keywords" content='EV Charging,Ultra fast charging, smart and efficient charging, on-demand service, grid free charging'></meta>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
    <div style={{ background: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ color: 'white', textAlign: 'center' }}>
        <h1>Thank You!</h1>
        <p>Your message has been received.</p>
        <Link href="/">
          <button style={{ padding: '10px 20px', background: 'white', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Go To Home</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Thankyou;
