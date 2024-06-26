import kimjestesmyImg from '/src/assets/kimjestesmy.png';

export default function Aboutus() {
	return (
		<section className="bg-background-primary text-white">
			<div className="container max-w-xl p-6 py-12 mx-auto space-y-16 lg:px-8 lg:max-w-7xl pb-28">
				<span class="flex items-center">
					<span class="h-px flex-1 bg-white"></span>
					<span class="text-2xl font-bold shrink-0 px-6 text-white">Kim jesteśmy?</span>
					<span class="h-px flex-1 bg-white"></span>
				</span>
				<div>
					<p className="max-w-4xl mx-auto mt-4 text-xl text-center text-gray-300">Spółką, która specjalizuje się w kompleksowej obsłudze i realizacji transakcji z branży rolniczej, spożywczej oraz surowcowej. Mamy wszystko czego Twój biznes potrzebuje do zawierania bezpiecznych i zyskownych transakcji. </p>
				</div>
				<span class="flex items-center">
					<span class="h-px flex-1 bg-white"></span>
					<span class="text-2xl font-bold shrink-0 px-6">Czym się zajmujemy?</span>
					<span class="h-px flex-1 bg-white"></span>
				</span>
				<div>
					<p className="max-w-4xl mx-auto mt-4 text-xl text-center text-gray-300">Obecnie zajmujemy się obsługą transakcji dla naszych klientów i budujemy sieć zweryfikowanych dostawców oraz nabywców, dla stworzenia bezpiecznego i płynnego rynku. </p>
				</div>

				<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
					<div>

						<div className="mt-12 space-y-12">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-950/70 text-white">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg font-medium leading-6 text-white">Najlepsze ceny!</h4>
									<p className="mt-2 text-gray-300">Dostarczamy notowania, które pozwolą Ci na zawieranie transakcji po najlepszych cenach na rynku.</p>
								</div>
							</div>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-950/70 text-white">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg font-medium leading-6 text-white">Niezawodne źródło informacji!</h4>
									<p className="mt-2 text-gray-300">Ciągle rozwijana zakładka wiadomości dostarcza nie tylko informacje o bieżących wydarzeniach na rynku, ale zapewnia także niezawodne kompedium wiedzy na tematy rynków rolniczych i finansowych oraz handlu.</p>
								</div>
							</div>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-950/70 text-white">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-lg font-medium leading-6 text-white">Rolnictwo precyzyjne!</h4>
									<p className="mt-2 text-gray-300">Dostarczamy technologię, która sprawi, że Twoje rolnictwo wskoczy na wyższy poziom. Sprawdź nasze mapy lub skontaktuj się z nami, aby zamówić specjalny raport dotyczący interesującego Cię obszaru. Dzięki nam dowiesz się nie tylko na temat swojej uprawy, ale także Twojego kontrahenta.</p>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="mt-10 lg:mt-0">
						<img
							alt=""
							src={kimjestesmyImg}
							className="mx-auto rounded-lg shadow-lg"
							style={{ width: '55%', height: 'auto' }}
						/>
					</div>
				</div>

			</div>
		</section>
	);
}
