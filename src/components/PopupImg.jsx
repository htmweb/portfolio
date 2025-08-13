import React from 'react'
function PopupImg({img,pshow,close}) {
  return (
    <div className='popupImg' style={
        pshow ? {display:'block'} : {display:'none'}
    }>
        <div onClick={()=>close()}  className="closeWrap">
            <span className='close'>&times;</span>
        </div>
      <div className="imgCon">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default PopupImg
