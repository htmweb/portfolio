import React, { useEffect, useRef, useState } from 'react'
import MainHeading from '../components/MainHeading';
import webImg from '../assets/web.png';
import appImg from '../assets/app.png';
import iotImg from '../assets/iot.png';
import flutter from '../assets/flutter.png';
import reactimg from '../assets/react.png';
import arduino from '../assets/arduino.png';
import gitImg from '../assets/git.png';
import SideNav from '../components/SideNav'
import NavBar from '../components/NavBar';
import lmsImg from '../assets/projects/lms.png';
import todoapp from '../assets/projects/app.png';
import emzy from '../assets/projects/emzy.png';
import PopupImg from '../components/PopupImg';

import linkedin from '../assets/linkedin.png'
import fb from '../assets/fb.png'
import git from '../assets/git.png'


function Home() {
  const cardref = useRef([]);
  const [show,setShow] = useState(false);
  const [popShow,setPop] = useState(false);
  const [popImg,setImg] = useState(null);

  function popup(img){
    setPop(true);
    setImg(img);
  }
  const close = ()=>{
    setPop(false);
    setImg(null);
  }

  useEffect(()=>{
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.remove('fadeOut');
          
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.add('fadeOut');
        }
      });
    },{
      threshold: 1,
      
    },);
    
    cardref.current.forEach((card)=>{
      if(card){
        observer.observe(card);
      }
    });
   
    return () => {
       cardref.current.forEach((card)=>{
      if(card){
        observer.unobserve(card);
      }
    });
   
    }
   

  },[]);
 
  
  return (
    <div className='home-wrapper'>
      <SideNav show={show} setShow={setShow}/>
      <NavBar show={show} setShow={setShow}/>
      <MainHeading/>
      <PopupImg img={popImg} pshow={popShow} close={close}/>
      <div className="card-con">
        <div className="card col" ref={(e)=> cardref.current[0] = e}>
          <img className='skill-img' src={webImg} alt="" />
          <p className='skill text-sm md:text-lg lg:text-xl'>Web Development</p>
      </div>
      <div className="card col" ref={(e)=> cardref.current[1] = e}>
        <img  className='skill-img' src={appImg} alt="" />
        <p className='skill text-sm md:text-lg lg:text-xl'>App Development</p>
      </div>
      <div className="card col" ref={(e)=> cardref.current[2] = e}>
        <img className='skill-img' src={iotImg} alt="" />
        <p className='skill text-sm md:text-lg lg:text-xl'>IOT Solutions</p>
      </div>
      </div>

     <h1 className='title text-xl md:text-3xl lg:text-3xl'>Development Stack</h1>
      <div className="skill-box bg-blue-50">
        <h3 className='skill-name text-lg md:text-lg lg:text-xl'>Web Development</h3>
        <img className='box-bg-img' src={reactimg}alt="" />
        <div className="el">
          <p>I build modern websites using <span className='highlight'>HTML</span>,<span className='highlight'>CSS</span>,<span className='highlight'>JavaScript</span>, and <span className='highlight'>TypeScript</span>. I work with frameworks like <span className='highlight'>React.js</span>, and style my projects using <span className='highlight'>Tailwind CSS</span> and <span className='highlight'>Bootstrap</span>. For backend and APIs, I use <span className='highlight'>Node.js</span>,<span className='highlight'>Express</span>, and <span className='highlight'>MongoDB</span>. I also use tools like Git, Vite, and Figma to manage code and design efficiently.

</p>
        </div>
        
      </div>

      <div className="skill-box bg-blue-50">
        <h3 className='skill-name text-lg md:text-lg lg:text-xl'>App Development</h3>
        <img className='box-bg-img' src={flutter}alt="" />
        <div className="el">
          <p>I develop mobile apps using <span className='highlight'>Flutter</span> with the <span className='highlight'>Dart</span> programming language. I manage app state using <span className='highlight'>Provider</span> and <span className='highlight'>Bloc</span>, and work with <span className='highlight'>REST APIs</span>, <span className='highlight'>Firebase</span>, and <span className='highlight'>SQLite</span> to handle data and backend services.</p>
        </div>
        
      </div>

      <div className="skill-box bg-blue-50">
        <h3 className='skill-name text-lg md:text-lg lg:text-xl'>IOT Solutions</h3>
        <img className='box-bg-img' src={arduino}alt="" />
        <div className="el">
          <p>I build IoT solutions using microcontrollers like <span className='highlight'>ESP32</span>, <span className='highlight'>ESP8266</span>, and <span className='highlight'>Arduino</span>, programmed mainly in <span className='highlight'>C++</span>. I use communication protocols such as <span className='highlight'>ESP-NOW</span>,<span className='highlight'>MQTT</span>,<span className='highlight'>BLE</span>, and <span className='highlight'>HTTP</span>, and develop with the Arduino IDE. For cloud integration and data storage, I work with <span className='highlight'>Firebase</span>.
</p>
        </div>
        
      </div>


      <h1 className='title-left mt-5 mb-5 text-xl md:text-3xl lg:text-3xl'>Latest Projects</h1>

      <div className="project-wrapper">
         <div className="projects">
        <div className="project-card" onClick={()=>popup(lmsImg)}>
          <img src={lmsImg} alt="" />
          <p className='tag'>Web Development</p>
          <p className='project-card-txt text-sm md:text-lg'>Learning Management System</p>
        </div>
        <div className="project-card" onClick={()=>popup(todoapp)}>
          <img src={todoapp} alt="" />
          <p className='tag'>Flutter App</p>
          <p className='project-card-txt text-sm md:text-lg'>Todo App with cloud functions</p>
        </div>
        <div className="project-card" onClick={()=>popup(emzy)}>
          <img src={emzy} alt="" />
          <p className='tag'>Web Development</p>
          <p className='project-card-txt text-sm md:text-lg'>E Commerce shop</p>
        </div>

        <a href="https://github.com/htmweb" target='_blank'>
          <div className="project-card-git">
          <img src={gitImg} alt="" />
          <p className='project-card-txt text-sm md:text-lg'>See all projects in my GitHub profile.</p>
        </div>
        </a>
        
      </div>
      
      </div>
      
    
      <div className="achievements">
        <h1 className='title mt-5 mb-5 text-xl md:text-3xl lg:text-3xl'>Latest Achievements</h1>

        <div className="card-ach">
          <p className='com-name text-xl md:text-3xl lg:text-3xl'>Gateway Robotic Competition</p>
          <p className='com-status text-md md:text-xl lg:text-2xl'>1st runner up</p>
          <p className='com-date text-md md:text-xl lg:text-2xl'>Date: 11/02/2024</p>
        </div>

        <div className="card-ach">
          <p className='com-name text-xl md:text-3xl lg:text-3xl'>SLIIT Codefest</p>
          <p className='com-status text-md md:text-xl lg:text-2xl'>2nd runner up</p>
          <p className='com-date text-md md:text-xl lg:text-2xl'>Date: 31/05/2023</p>
        </div>
      </div>

      <div className="footer">
        <p>Contact Me</p>
        <div className="fooitem">
          <a href="https://www.linkedin.com/in/heshanmeewalaarachchi/">
            <img src={linkedin} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100082228996643">
            <img src={fb} />
          </a>
          <a href="https://github.com/htmweb">
            <img src={git} />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home;
