import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainNavbar2 from "@/components/MainNavbar2";
import Video from "@/components/Video";
import MediaCard from "@/components/MediaCard";
const inter = Inter({ subsets: ["latin"] });
import Image1 from "@/components/Image1";
import Image2 from "@/components/Image2";
import Patch from "@/components/Patch";
import Map from "@/components/Map";
import MapDetails from "@/components/MapDetails";
import Marquee from "@/components/Marquee";
import Foot from "@/components/Foot";
import { useRef } from "react";
export default function Home() {
const contact=useRef();
const about=useRef();
const career=useRef();
  return (
    <> 
      <Head>
        <title>Home</title>
        <meta name="description" content='cargar is a charge as a service platform which provide on-demand ev-charging'></meta>
      <meta name="keywords" content='EV Charging,Ultra fast charging, smart and efficient charging, on-demand service, grid free charging'></meta>
    
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div>
        <MainNavbar2 contact={contact} career={career} about={about}></MainNavbar2>

        <Video></Video>
        <div className=" container text-center">
          <div className="row justify-content-center margin-top">
            <MediaCard
              title="ULTRA-FAST CHARGING"
              body="Quality charge your electric vehicle in less than 45 mins."
              src="/charge.png"
            ></MediaCard>
            <MediaCard
              title="SMART & EFFICIENT"
              body="Real time monitoring & management of your charging requirements"
              src="/smart.png"
            ></MediaCard>
            <MediaCard
              title="ON-DEMAND SERVICE"
              body="Charge your EV wherever you are & whenever you want."
              src="/ondemand.png"
            ></MediaCard>
            <MediaCard
              title="GRID FREE CHARGING"
              body="100% Grid-free & Hassle-free charging "
              src="/gridfree.png"
            ></MediaCard>
          </div>
        </div>

    
        <div className="row margin-top" ref={about}>
          <div className="col-6">
            <Image1 />
          </div>
          <div
            className="col-6 text-justify-center "
            style={{ margin: "auto" }}
          >
            <div className="h1 text-white">
              Bringing Energy Closer to You
              <span style={{ color: "#75D626" }}>.</span>
            </div>
            <div className="text-white " id="text">
              At CARGAR, we believe in sustainable future with optimized
              utilization of energy to satisfy the modern power needs. Our goal
              is to empower electric vehicle users to access energy efficiently
              and at their convenience.
            </div>
          </div>
        </div>

        <div ref={career}>
        <Patch ></Patch>
        </div>
        <div className="position-relative margin-top" >
          <Image2 />
          <div
            className="position-absolute ps-4 margin-top col-sm-6 col-md-8 col-lg-6"
            style={{ top: 0 }}
          >
            <div className="my-h1 text-white">
              We are <span className="text-warning">powerful</span> when we work
              together<span className="text-warning">.</span>
            </div>
            <div className=" text-white margin-top" id="text">
              Together, we have experienced many highs and lows. But every time
              we collaborated, we worked hard and shrewdly to put things in the
              right order.<br></br>
              <br></br>
              Our careers have taught us that if we work together, we can get
              over any obstacle.
            </div>
          </div>
        </div>

        <div className="margin-top">
        <Marquee ></Marquee>
        </div>

        <div className="position-relative">
          <div >
            <Map />
          </div>
          <div  className="position-absolute" style={{top:'4vh', left:'2vw'}}>
            <MapDetails/>
          </div>
        </div>

        <div ref={contact} className='margin-top'>
        <Foot />
        </div>
      </div>
    </>
  );
}
