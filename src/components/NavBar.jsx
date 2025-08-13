import React, { useEffect, useRef } from 'react'
function NavBar({setShow,show}) {
 const ref = useRef(null);

 useEffect(() => {
  window.addEventListener('scroll',()=>{
  if(ref.current) {
    if(window.scrollY > 50){
      ref.current.classList.add('nav-scroll');
      ref.current.width = window.scrollY;
    }
    else{
      ref.current.classList.remove('nav-scroll');
    }
  }
 });
 }); 

 

  return (
    <div>
        <div ref={ref} className="nav w-full flex p-4">
             <p className='text-white text-xl roboto' style={{
              display: 'flex',
              alignItems: 'center',
             }}>Hello</p>
            <div onClick={()=>setShow(!show)} className='follow flex ml-auto 
            space-x-5 items-center'>
               <span style={{
                cursor: 'pointer',
                color: 'rgb(255, 255, 255)',
                fontSize: '0.8rem',
                padding: '5px',
                border: '2px solid rgb(255, 255, 100)',
                borderRadius: '15px',
               }}>Contact Me</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar
