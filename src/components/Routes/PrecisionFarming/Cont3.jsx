import Reveal from "@/components/animations/reveal/reveal";
import sentielimg from "/src/assets/sentinel.png"
import { Link } from 'react-router-dom';

export default function Cont4() {
    return (

<section className="bg-background-primary text-white">
<Reveal>
<div className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={sentielimg}
            className="absolute inset-0 h-full w-full h-auto border-2 border-white/10"
          />
        </div>
        </div>
      <div className="relative flex items-center bg-violet-950/30">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-violet-950/30"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-3xl font-bold sm:text-3xl">
          Satelity Sentinel 2 – nowoczesne oko w niebie dla rolnictwa
          </h2>

          <p className="mt-4 text-white text-justify">
            Satelity Sentinel 2 są kluczowym elementem programu Copernicus, który jest prowadzony przez Europejską Agencję Kosmiczną (ESA) we współpracy z Unią Europejską. Te zaawansowane urządzenia obserwacyjne zaprojektowano z myślą o monitorowaniu stanu powierzchni Ziemi, dostarczając cenne dane z obszarów tak różnorodnych jak rolnictwo, leśnictwo, zarządzanie wodami i monitorowanie katastrof naturalnych.
          </p>
          
        </div>
      </div>
    </div>
  </div>
  </Reveal>
</section>


)
}