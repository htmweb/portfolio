import React, { useState } from 'react'
import fb from '../assets/fb.png'
import git from '../assets/git.png'
import lin from '../assets/linkedin.png'
import wht from '../assets/wht.png'
import close from '../assets/close.png'
function SideNav({show,setShow}) {
 
  return (
    <div className='sidenav' style={show ? {width: "100px"} : {width: '0'}}>
      <div className="btnwrap">
        <img className='closeBtn' src={close} onClick={()=>setShow(!show)}/>
      </div>
      <div className="slider-icons">
        <a href="https://web.facebook.com/profile.php?id=100082228996643">
        <img src={fb} />
      </a>
      <a href="https://www.linkedin.com/in/heshanmeewalaarachchi/">
        <img src={lin} />
      </a>
      <a href="https://github.com/htmweb">
        <img src={git} />
      </a>
      <a href="#">
        <img src={wht} />
      </a>
      </div>
    </div>
  )
}

export default SideNav
