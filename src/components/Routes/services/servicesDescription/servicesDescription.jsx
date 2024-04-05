import Reveal from "@/components/animations/reveal/reveal.jsx";
import ServiceCard from "@/components/Routes/services/servicesDescription/serviceCard/serviceCard.jsx";
import serviceCardPhoto from "@/assets/services/serviceDescriptionImage.png"
import useSphere from "@/components/Routes/services/servicesDescription/useSphere.js";


const ServicesDescription = () => {

    const sphereRef = useSphere()

    return (
        <div className='bg-background-to-dark-gradient font-normal'>
            <div className='space-y-5 py-16 px-5'>
                <Reveal>
                    <h2 className='text-[40px] font-bold'>Lorem impsum</h2>
                </Reveal>
                <Reveal>
                    <h3 className='text-lg'>lorem ipsum</h3>
                </Reveal>
                <section className='flex flex-wrap justify-center gap-48 pt-24'>
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor sit amet ipsum dolor lorem'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                    <ServiceCard
                        serviceHeader={'Lorem ipsum dolor'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'}
                        servicePhoto={serviceCardPhoto}
                    />
                </section>
                <section className='flex max-lg:flex-col lg:items-start items-center justify-evenly gap-y-24 py-36 relative'>
                    <div className='max-w-[576px] text-left space-y-7'>
                        <Reveal>
                            <h2 className='text-5xl font-bold'>Lorem ipsum dolor</h2>
                        </Reveal>
                        <Reveal>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
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
