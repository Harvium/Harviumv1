import Service from "@/components/Routes/services/ourServices/service/service.jsx";
import serviceIcon from "@/assets/services/serviceDefaultIcon.png"
import { Link } from 'react-router-dom';

const OurServices = () => {

    return (
        <div className='bg-background-primary'>
            <div className='flex flex-col justify-center items-center gap-32 px-5 py-24'>
                <h1 className='text-[40px]'>Nasze Usługi</h1>
                <div className='flex flex-wrap justify-center mb-32 gap-28'>
                    <Service
                        logo={serviceIcon}
                        serviceHeading={'Zapewniamy kompleksową obsługę w obrocie produktami'}
                        serviceDescription={'Zapewniamy płynność na rynkach, a zawarcie z nami transakcji wiąże się w naszym rynku. Łączymy sprzedawców z kupującymi, a naszą misją jest stworzenie całkowicie transparentnego rynku. Jesteśmy w stanie dostosować nasze rozwiązania do Twoich wymagań. '}
                        serviceRoute={'/Harvium-LandingPage/'}
                    />
                    <Service
                        logo={serviceIcon}
                        serviceHeading={'Dostarczamy dane'}
                        serviceDescription={'Nasza działalność obejmuje również pomoc związaną z samym produktem. Jesteśmy w stanie dostarczyć naszym klientom dane związane bezpośrednio z ich działalnością'}
                        serviceRoute={'/Harvium-LandingPage/'}
                    />
                    <Service
                        logo={serviceIcon}
                        serviceHeading={'Wspieramy rozwój rolników i przedsiębiorstw'}
                        serviceDescription={'Zapewniamy płynność na rynkach, a zawarcie z nami transakcji wiąże się w naszym rynku. Łączymy sprzedawców z kupującymi, a naszą misją jest stworzenie całkowicie transparentnego rynku. Jesteśmy w stanie dostosować nasze rozwiązania do Twoich wymagań.'}
                        serviceRoute={'/Harvium-LandingPage/'}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;
