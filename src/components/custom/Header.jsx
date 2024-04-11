import {Button} from '../ui/button';

export default function Header() {
  return (
    <header className="flex justify-center relative flex lg:flex-row flex-col sm:gap-20 text-white  px-0 py-16">
      <span className="h-[600px] w-[200px] left-32 absolute bg-[#262697] blur-4xl -z-10 -rotate-45"></span>
      <span className="h-[600px] w-[200px] right-32 -bottom-52 absolute bg-[#fba91c60] blur-4xl -z-10 -rotate-45"></span>
      <div className="flex flex-col gap-6 mb-4 w-3/4">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="w-[580px] font-arvo font-black text-7xl font-bold items-start gap-6 ">Handluj z nami</h1>
          <p className='w-[564px] text-xl text-justify'>Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie. Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie.</p>
          <div className='flex flex-row gap-4 pt-2'>
              <Button>Kup teraz <img src='src/assets/arrow.png' className='scale-50'></img></Button>
              <Button>Skontaktuj się z nami</Button>
          </div>
        </div>
        <div className="flex -mt-24 justify-end w-full">
          <img src="src/assets/zboze.png" className="w-[400px] xl:w-[500px]"></img>
        </div>
      </div>
  
    </header>
  )
}
