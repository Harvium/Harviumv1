import React from 'react';

function Timeline() {
  return (
    <section className="bg-background-primary text-gray-100 pb-16">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<h2 className="text-4xl font-bold mb-12 text-center">Plan rozwojowy</h2>
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-800">
					<h3 className="text-3xl font-semibold">Harvium</h3>
					<span className="text-sm font-bold tracking-wider uppercase text-gray-400">Plan uruchomienia dodatkowych usług </span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
					<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-800">
						<h3 className="text-xl font-semibold tracking-wide">Źródło niezależnych informacji</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">KWIECIEŃ 2024</time>
						<p className="mt-3">Na naszej stronie pojawią się pierwsze publikacje związane z gospodarką, rolnictwem i narzędziami rolnictwa precyzyjnego.</p>
					</div>
					<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-800">
						<h3 className="text-xl font-semibold tracking-wide">Platforma handlowa i moduł rolnictwa precyzyjnego</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">CZERWIEC 2024</time>
						<p className="mt-3">Do użytku przedsiębiorstw i klientów detalicznych zostaną uruchomione platforma i rynek do obrotu produktami spożywczymi. Kolejne kategorie produktów będą udostępniane w nadchodzących okresach. Ponadto każdy będzie mógł skorzystać z panelu do analizy określonego obszaru geograficznego.</p>
					</div>
					<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-800">
						<h3 className="text-xl font-semibold tracking-wide">Wprowadzimy kontrolę jakości i gwarancję wszystkich produktów</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">WRZESIEŃ 2024</time>
						<p className="mt-3">Nasze produkty będą przechodziły specjalne kontrole, a za ich jakość będziemy odpowiadać Harvium. Kliencie będą mogli cieszyć się niezmienną jakością produktów.</p>
					</div>
					<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-800">
						<h3 className="text-xl font-semibold tracking-wide">Udostępnimy moduły API</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">Wrzesień 2024</time>
						<p className="mt-3">Zapewnimy możliwość bezpośredniego dostępu do systemów dla autoryzowanych przedsiębiorstw.</p>
					</div>
					<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-800">
						<h3 className="text-xl font-semibold tracking-wide">Transport i ekspansja</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">Listopad 2024</time>
						<p className="mt-3">Udostępnimy dodatkowe formy transportu i pomożemy naszym klientom w rozwoju działalności na rynkach zagranicznych.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  );
}

export default Timeline;
