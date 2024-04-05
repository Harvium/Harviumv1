import Reveal from "@/components/animations/reveal/reveal.jsx";


const ServiceCard = ({ serviceHeader, serviceDescription, servicePhoto }) => {
    return (
        <div className='w-[505px] h-fit bg-[#ffffff07] text-white text-start rounded-md hover:bg-[#ffffff10] transition duration-500'>
            <div className='flex flex-col justify-end gap-3 py-5 max-sm:px-8'>
                <Reveal>
                    <h1 className='text-2xl font-bold sm:px-8'>{serviceHeader}</h1>
                </Reveal>
                <div className='flex max-sm:flex-col justify-end items-center sm:items-start gap-10'>
                    <div className='flex flex-col justify-start mt-6'>
                        <Reveal>
                            <p className='sm:w-56'>{serviceDescription}</p>
                        </Reveal>
                    </div>
                    <div className='mt-auto'>
                        <img src={servicePhoto} className='size-52' alt='service photo'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
