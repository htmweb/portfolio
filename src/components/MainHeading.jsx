import React from 'react'
import pic from '../assets/pic.png'
function MainHeading() {
  return (
    <div>
      <div className="main_head">
        <div className='main_c '>
            <div className="img_c">
               <img src={pic} className='pic' />
            <div className="img"> 
             
            </div>
            
            </div>

            <div className="container">
            <p className='iam text-4xl lg:text-8xl roboto'>I'm</p>
            <p className='name text-2xl lg:text-6xl roboto'>Heshan Meewalaarachchi</p>
            <p className='des text-1xl lg:text-xl'>
                I'm a software developer and innovater. 
                I like to level up the world by technology. I love to create new things.
                I have a passion for learning new technologies and applying them to solve real-world problems.
            </p>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default MainHeading
