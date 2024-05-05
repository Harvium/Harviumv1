import Reveal from "@/components/animations/reveal/reveal";
import mapaOpisImg from "/src/assets/opis_mapy.png";
import { Link } from 'react-router-dom';

export default function Cont5() {
    return (

<section className="bg-background-primary text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
<Reveal>
  <div className="mx-auto max-w-screen-xl rounded-lg overflow-hidden lg:h-full py-8 sm:py-12 lg:py-4 px-4 sm:px-6 lg:px-8">
    <img
      alt=""
      src={mapaOpisImg}
      className="h-full object-contain"
    />
  </div>
  <div className="max-w-xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" >
      <h2 className="text-3xl font-bold sm:text-4xl text-center">Grupa docelowa </h2>

      <p className="text-lg mt-4 text-white text-center font-medium">
      Nasze usługi są skierowane przede wszystkim do:
      </p>
      <ul className="list-disc ml-8 mt-8">
        <li>Rolników: Pomagają monitorować i optymalizować prace w gospodarstwie rolnym.</li>

        <li className="mt-4">Handlowców produktów rolnych: Dostarczają informacji pomocnych w planowaniu zakupów i sprzedaży.</li>

        <li className="mt-4">Interesariuszy agrobiznesu: Wspierają w podejmowaniu decyzji na podstawie rzetelnych danych satelitarnych.</li>
      </ul>
        <br/>
      <p className="text-2xl mt-4 text-purple-800 text-center font-bold">
      Chcesz dowiedzieś się wiecej?
      </p>
    </div>
    <div className="mt-4 md:mt-8 flex justify-center">
              <Link
                to="/Contact"
                className="inline-flex items-center rounded-full bg-purple-800 px-20 py-4 text-medium font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Skontaktuj się z nami

              </Link>
            </div>
</Reveal>


</section>



)
}