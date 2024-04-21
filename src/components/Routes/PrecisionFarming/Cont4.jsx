import Reveal from "@/components/animations/reveal/reveal";
import { Link } from 'react-router-dom';

export default function Cont4() {
    return (

<section className="bg-background-primary text-white">
<Reveal>
<div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="flex items-center justify-center max-w-xl mx-auto">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mt-4">Oferujemy precyzyjne narzędzia dla rolnictwa
        </h2>

        <p className="mt-4 text-gray-300">
          Zapewniamy przyjazny dla każdego dostęp do danych z satelitów Sentinel 2 i innych, które są nieocenionnym narzędziem w rękach rolników, handlowców produktów rolnych oraz innych uczestników agrobiznesu.
        </p>
        <p className= "text-lg mt-4 text-white font-bold">
          Do naszych głównych produktów należą:
        </p>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-violet-950/70 p-4">
          
        </span>

        <div>
          <h2 className="text-lg font-bold">Mapy NDVI (Normalized Difference Vegetation Index)</h2>

          <p className="mt-1 text-sm text-gray-300">
          Te mapy są używane do oceny zdrowia i kondycji roślinności, pozwalając na szybką interwencję w przypadku wykrycia problemów.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-violet-950/70 p-4">
          
        </span>

        <div>
          <h2 className="text-lg font-bold">Mapy zawartości wilgoci w glebie</h2>

          <br/>
          <p className="mt-1 text-sm text-gray-300">
          Są niezwykle przydatne w planowaniu nawadniania, pomagając zoptymalizować zużycie wody oraz zwiększyć efektywność upraw.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-violet-950/70 p-4">
          
        </span>

        <div>
          <h2 className="text-lg font-bold">Inne produkty</h2>
<br/>
          <p className="mt-1 text-sm text-gray-300">
          Dodatkowo oferujemy produkty takie jak mapy pokrycia terenu, mapy wykorzystania gruntów czy indeksy stresu roślin. Jesteśmy także w stanie przygotować indywidualną analizę terenu wraz z raportem.
          </p>
        </div>
      </div>

      
    </div>
  </div>
</Reveal>
</section>


)
}