import React from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video() {
  return (
    <div className='video'>
      {/* <video
        className='video__player'
        src='https://v19-web-newkey.tiktokcdn.com/902c01f9969a4ca0b1287a742bd08fb3/5f87a046/video/tos/alisg/tos-alisg-pve-0037c001/955b3a740eba4b4cbe297aac653dbdfe/?a=1988&br=2244&bt=1122&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201014190413010189195015450BAC26&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzdxZDY7ZmdrdzMzODczM0ApM2ZkODk4aGVnNzk3Nmk6N2dtcXBzX3FwaXFfLS1gMTRzczIwLTZeYjRgYi8xYTIwXl86Yw%3D%3D&vl=&vr='
      ></video> */}

      <VideoSidebar />
      <VideoFooter />
    </div>
  )
}

export default Video
