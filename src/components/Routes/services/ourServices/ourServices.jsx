import Service from "@/components/Routes/services/ourServices/service/service.jsx";
import serviceIcon from "@/assets/services/serviceDefaultIcon.png"

const OurServices = () => {

    return (
        <div className='bg-background-dark-blue-gradient font-roboto'>
            <div className='flex flex-col justify-center items-center gap-32 px-5 py-24'>
                <h1 className='text-[40px]'>Nasze Usługi</h1>
                <div className='flex flex-wrap justify-center mb-32 gap-28'>
                    <Service
                        logo={serviceIcon}
                        serviceHeading={'Long heading is what you see here in this feature section'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
                        serviceRoute={'/Harvium-LandingPage/'}
                    />
                    <Service
                        logo={serviceIcon}
                        serviceHeading={'Long heading is what you see here in this feature section'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
                        serviceRoute={'/Harvium-LandingPage/'}
                    />
                    <Service
                        logo={serviceIcon}
                        serviceHeading={'Long heading is what you see here in this feature section'}
                        serviceDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
                        serviceRoute={'/Harvium-LandingPage/'}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;
