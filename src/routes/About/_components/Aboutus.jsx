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

				

			</div>
		</section>
	);
}
