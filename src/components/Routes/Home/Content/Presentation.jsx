import React from 'react'
import { Link } from 'react-router-dom';

export default function Presentation() {
  return (

<div className='bg-background-primary flex flex-col items-center justify-center gap-4 sm:gap-20 text-white pt-28 pb-28 pl-16 pr-16'>
    <div className='text-center sm:text-left'>
        <h1 className="text-4xl font-bold items-start gap-6 text-center">Dlaczego Warto z nami handlować ?</h1>
        <p className='mt-2 non-italic text-lg'>Zobacz poniższe wideo, aby dowiedzieć się w jaki sposób możemy wspomóc twój biznes</p>
    </div>

    <div className='flex overflow-hidden mt-2 justify-center shadow-golden'>
        <iframe src='https://www.youtube.com/embed/Qj9Cv037TB8?si=2Glda2CLn4pHsj4E&autoplay=1&mute=1' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-lg lg:w-video-lg lg:h-video-lg w-video-sm h-video-sm'></iframe>
    </div>

</div>


  )
}
