import Reveal from "@/components/animations/reveal/reveal.jsx";
import ServiceCard from "@/components/Routes/services/servicesDescription/serviceCard/serviceCard.jsx";
import serviceCardPhoto from "@/assets/services/serviceDescriptionImage.png"
import dedicated from "@/assets/services/dedicated.jpg"
import control from "@/assets/services/control.jpg"
import news from "@/assets/services/news.jpg"
import useSphere from "@/components/Routes/services/servicesDescription/useSphere.js";


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
                        serviceDescription={'Zapewniamy kompleksową obsługę procesu sprzedaży oraz kupna towarów przez rolników i przedsiębiorstwa. Pobieramy minimalną marżę, co sprawia, że nasze towary są w najlepszych cenach.'}
                        servicePhoto={dedicated}
                    />
                    <ServiceCard
                        serviceHeader={'Jakość naszych produktów jest kontrolowana'}
                        serviceDescription={'Uszczelniamy nasze kanały transportowe, aby produkty, które dostarczamy spełniały najwyższe standardy jakości. Nie pozwalamy na zalewanie rynku produktami gorszej jakości.'}
                        servicePhoto={control}
                    />
                    <ServiceCard
                        serviceHeader={'Źródło bieżących informacji'}
                        serviceDescription={'Dostarczamy informacje o rynku rolniczym i gospodarce. Czytaj nasze newsy, komentuj w social mediach i stań się częścią naszej społeczności.'}
                        servicePhoto={news}
                        
                    />
                      <ServiceCard
                        serviceHeader={'Skorzystaj z możliwości rolnictwa precyzyjnego'}
                        serviceDescription={'Wykorzystaj rolnictwo precyzyjne do przewidywania trendów i poprawy efektywności upraw.'}
                        servicePhoto={serviceCardPhoto}
                    />
                </section>
                <section className='flex max-lg:flex-col lg:items-start items-center justify-evenly gap-y-24 py-36 relative'>
                    <div className='max-w-[576px] text-left space-y-7'>
                        <Reveal>
                            <h2 className='text-4xl font-bold'>Precyzyjne narzędzia dla rolnictwa</h2>
                        </Reveal>
                        <Reveal>
                            <p>
                            Zapewniamy przyjazny dla każdego dostęp do danych z satelitów Sentinel 2 i innych. Nasze usługi są skierowane przede wszystkim do:
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                            - Rolników: Pomagają monitorować i optymalizować prace w gospodarstwie rolnym.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                            - Handlowców produktów rolnych: Dostarczają informacji pomocnych w planowaniu zakupów i sprzedaży.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                            - Interesariuszy agrobiznesu: Wspierają w podejmowaniu decyzji na podstawie rzetelnych danych satelitarnych.
                            </p>
                        </Reveal>
                    </div>
                    <canvas ref={sphereRef} className='outline-none m-2'/>
                </section>
            </div>
        </div>
    );
};

export default ServicesDescription;
