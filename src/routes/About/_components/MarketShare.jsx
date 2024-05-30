import React from 'react';

function MarketShare() {
  return (
    <section className="bg-[#020621]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 text-white">
      <h1 className="text-4xl font-bold mb-12">Naszym celem jest połączyć:</h1>
        <dl className="grid max-w-screen-md gap-8 mx-auto text-white sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-2xl md:text-4xl font-extrabold">0.5 mld</dt>
            <dd className="font-light text-gray-100">Rolników</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">10 tys.</dt>
            <dd className="font-light text-gray-100">dostawców cen</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">14 bln $</dt>
            <dd className="font-light text-gray-100">rynek spożywczy</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default MarketShare;
