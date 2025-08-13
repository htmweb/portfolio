import React from 'react'
function MainHeading() {
  return (
    <div>
      <div className="main_head">
        <div className='main_c '>
            <div className="img_c">
            <div className="img"> 
            </div>
            <p style={
              {
                color: 'rgb(200, 255, 255)',
                textAlign: 'center',
                fontSize: '0.8rem',
              }
            }>Designed by <a href="https://www.freepik.com" style={{
              color: 'rgb(0, 200, 255)',
            }}>Freepik</a></p>
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
