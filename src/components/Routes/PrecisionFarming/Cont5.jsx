import Reveal from "@/components/animations/reveal/reveal";
import mapaOpisImg from "/src/assets/opis_mapy.png";
import { Link } from 'react-router-dom';

export default function Cont5() {
    return (


<section className="bg-background-primary text-white">
  <Reveal>
	<div className="container flex flex-col mx-auto lg:flex-row">
        <div className="lg:w-1/2 xl:w-3/5 bg-background-primary">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                alt=""
                src={mapaOpisImg}
                className="h-full object-contain"
              />
            </div>
          </div>
		<div className="flex flex-col px-6 py-8 space-y-14 rounded-sm sm:p-8 lg:p-14 lg:w-1/2 xl:w-2/5 bg-violet-950/30 text-white">
			<div className="flex space-x-2 sm:space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>

				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">NDVI</p>
					<p className="leading-snug">Normalized Difference Vegetation Index określa kondycję roślinności. Przyjmuje wartości od -1 do 1, gdzie wartości bliższe 1, oznaczają roślinność w lepszym stanie.</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">True color composite</p>
					<p className="leading-snug">Używany do monitorowania stanu upraw, analizowania kondycji roślinności oraz wykrywania zmian w pokryciu terenu.</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">NDWI</p>
					<p className="leading-snug">Normalized Difference Water Index używany do identyfikacji i monitorowania zawartości wody w roślinności i glebie. W rolnictwie jest stosowany do oceny wilgotności gleby i stanu nawodnienia roślin, co pozwala na optymalizację nawadniania i zarządzanie ryzykiem suszy.</p>
				</div>
			</div>
      <div className="flex space-x-2 sm:space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>

				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Dane spersonalizowane</p>
					<p className="leading-snug">Na specjalne życzenie dostarczymy inne produkty w tym dane o najwyższej dostępnej rozdzielczości.</p>
				</div>
			</div>
      <div className="flex space-x-2 sm:space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>

				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Dedykowana mapa</p>
					<p className="leading-snug">Znajdziesz tu wszystkie dane oraz produkty które pozwolą użytkownikowi wejść na wyższy poziom w monitorowaniu ryzyk i maksymalizacji zysków.</p>
				</div>
			</div>
		</div>
		
	</div>
  </Reveal>
</section>

)
}