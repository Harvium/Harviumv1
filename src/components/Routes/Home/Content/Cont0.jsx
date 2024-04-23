import headerphoto from '/src/assets/headerphoto.png';
import arrow from '/src/assets/arrow.png';
import { Link } from 'react-router-dom';

export default function Cont0() {
  return (
    <section className="bg-background-primary">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={headerphoto}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 text-white">
            <h2 className="text-5xl font-bold">Handluj z nami</h2>

            <p className="text-lg mt-4 text-white" style={{textAlign: 'justify'}}>
              Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie.
              Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie.
            </p>

            <div className="mt-4 md:mt-8 flex justify-center">
              <Link
                to="/Trade"
                className="inline-flex items-center rounded-full bg-purple-900 px-20 py-4 text-medium font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Kup teraz
                <img alt=""
              src={arrow} className="h-4 w-4 ml-2" />

              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
