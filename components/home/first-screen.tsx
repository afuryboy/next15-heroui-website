// import dynamic from 'next/dynamic'

// const Terminal = dynamic(
//    () => import('@/components/home/home-terminal'), { ssr: false }
// )

import Welcome from "./welcome";
export default function FirstScreen() {
  
  return (
    <div className="w-full">
      <video
        className="absolute left-0 right-0 h-screen w-full object-cover"
        src="https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/video/marathon.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative h-screen">
        {/* todo: add termianl introduce
        <div className="w-1/2 h-1/2">
          <Terminal />
        </div> */}
        <Welcome />
      </div>
    </div>
  );
}
