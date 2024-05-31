import Reveal from "/src/components/animations/reveal/reveal.jsx";
import ServiceCard from "./serviceCard/serviceCard.jsx";
import serviceCardPhoto from "/src/assets/services/serviceDescriptionImage.png"
import dedicated from "/src/assets/services/dedicated.jpg"
import control from "/src/assets/services/control.jpg"
import news from "/src/assets/services/news.jpg"
import useSphere from "./useSphere.js";


const ServicesDescription = () => {

    const sphereRef = useSphere()

    return (
        <div className='bg-background-primary font-normal'>
            <div className='space-y-5 py-16 px-5'>
                <Reveal>
                    <h2 className='text-4xl font-bold'>Z nami możesz więcej</h2>
                </Reveal>
                <Reveal>
                    <h3 className='text-md text-white'>Otwórz się na nowe możliwości</h3>
                </Reveal>
                <section className='flex flex-wrap justify-center gap-48 pt-16'>
                    <ServiceCard
                        serviceHeader={'Rolniku! Skorzystaj z naszej dedykowanej obsługi'}
                        serviceDescription={<span className='text-gray-200'>Zapewniamy kompleksową obsługę procesu sprzedaży oraz kupna towarów przez rolników i przedsiębiorstwa. Pobieramy minimalną marżę, co sprawia, że nasze towary są w najlepszych cenach.</span>}
                        servicePhoto={dedicated}
                    />
                    <ServiceCard
                        serviceHeader={'Jakość naszych produktów jest kontrolowana'}
                        serviceDescription={<span className='text-gray-200'>Uszczelniamy nasze kanały transportowe, aby produkty, które dostarczamy spełniały najwyższe standardy jakości. Nie pozwalamy na zalewanie rynku produktami gorszej jakości.</span>}
                        servicePhoto={control}
                    />
                    <ServiceCard
                        serviceHeader={'Źródło bieżących informacji'}
                        serviceDescription={<span className='text-gray-200'>Dostarczamy informacje o rynku rolniczym i gospodarce. Czytaj nasze newsy, komentuj w social mediach i stań się częścią naszej społeczności.</span>}
                        servicePhoto={news}

                    />
                    <ServiceCard
                        serviceHeader={'Skorzystaj z możliwości rolnictwa precyzyjnego'}
                        serviceDescription={<span className='text-gray-200'>Wykorzystaj rolnictwo precyzyjne do przewidywania trendów i poprawy efektywności upraw.</span>}
                        servicePhoto={serviceCardPhoto}
                    />
                </section>
                <section className='flex max-lg:flex-col lg:items-start items-center justify-evenly gap-y-24 py-36 relative'>
                    <div className='max-w-[576px] text-left space-y-7'>
                        <Reveal>
                            <h2 className='text-4xl font-bold'>Precyzyjne narzędzia dla rolnictwa</h2>
                        </Reveal>
                        <Reveal>
                            <span>
                                Zapewniamy dla każdego przyjazny dostęp do danych z satelitów Sentinel 2 i innych. Nasze usługi są skierowane przede wszystkim do:
                            </span>
                        </Reveal>
                        <Reveal>
                            <ul className='list-disc list-inside space-y-6'>
                                <li className='text-gray-200'>Rolników: Pomagają monitorować i optymalizować prace w gospodarstwie rolnym.</li>
                                <li className='text-gray-200'>Handlowców produktów rolnych: Dostarczają informacji pomocnych w planowaniu zakupów i sprzedaży.</li>
                                <li className='text-gray-200'>Interesariuszy agrobiznesu: Wspierają w podejmowaniu decyzji na podstawie rzetelnych danych satelitarnych.</li>
                            </ul>
                        </Reveal>
                    </div>
                    <canvas ref={sphereRef} className='outline-none m-2 width-100%' />
                </section>


            </div>
        </div>
    );
};

export default ServicesDescription;
