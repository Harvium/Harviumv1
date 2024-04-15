export default function Cont1() {
    return (

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900 bg-background-primary flex flex-col items-center justify-center gap-4 sm:gap-20 pt-28 pb-28 pl-16 pr-16">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-5xl font-bold text-white md:text-5xl dark:text-white">
        Handluj z nami
      </h1>

      <p className="hidden text-white text-lg md:mt-4 md:block dark:text-white">
        Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie.
        Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-flex items-center rounded-full bg-purple-900 px-20 py-4 text-medium font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Kup teraz
          <img src='/src/assets/arrow.png' className='h-4 w-4 ml-2' />
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="/src/assets/headerphoto.png"
    className="h-full w-full object-cover sm:h-[calc(100% - 2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100% - 4rem)] md:rounded-ss-[60px]"
  />
</section>


)
}