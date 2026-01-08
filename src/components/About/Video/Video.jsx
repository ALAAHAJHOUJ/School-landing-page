import React, { useRef } from 'react'
import './Video.css'
import video from '../../../assets/Video.mp4'


function Video({cacher}) {
  const ref1=useRef()
  return (
    <div className='video' ref={ref1} onClick={(e)=>{if(e.target==ref1.current){cacher()}}}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video