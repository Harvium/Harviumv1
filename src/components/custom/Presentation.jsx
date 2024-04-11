import React from 'react'
import { Button } from '../ui/button'

export default function Presentation() {
  return (

  <div className='flex flex-col items-center justify-center gap-4 sm:gap-20 text-white pt-28 pb-28 pl-16 pr-16'>
    <div className='flex flex-col text-center sm:text-left gap-2'>
        <h1 className="font-arvo text-4xl font-bold items-start text-center">Dlaczego Warto z nami handlować ?</h1>
        <p className='non-italic text-lg'>Zobacz poniższe wideo, aby dowiedzieć się w jaki sposób możemy wspomóc twój biznes</p>
        <div className='mt-2 flex gap-4 justify-center'>
          <Button>Kup teraz</Button>
          <Button>Skontaktuj się z nami</Button>
        </div>
    </div>
    <div className='flex overflow-hidden mt-2 justify-center shadow-3xl shadow-[#da363690]'>
        <iframe 
          src='https://www.youtube.com/embed/Qj9Cv037TB8?si=2Glda2CLn4pHsj4E&autoplay=1&mute=1' 
          title="YouTube video player" 
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen className='rounded-lg lg:w-video-lg lg:h-video-lg w-video-sm h-video-sm'>
        </iframe>
    </div>

</div>


  )
}
