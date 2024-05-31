import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const YouTubeVideo = lazy(() => import('./YouTubeVideo'));

export default function Presentation() {
  return (
    <div className='bg-background-primary flex flex-col items-center justify-center gap-4 sm:gap-20 text-white pt-28 pb-28 pl-16 pr-16'>
      <div className='text-center sm:text-left'>
        <h1 className="text-3xl font-bold items-start gap-6 text-center">Dlaczego warto z nami współpracować?</h1>
        <p className='mt-2 non-italic text-lg text-gray-300'>Zobacz poniższe wideo, aby dowiedzieć się w jaki sposób możemy wspomóc Twój biznes</p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <YouTubeVideo />
      </Suspense>
    </div>
  );
}
