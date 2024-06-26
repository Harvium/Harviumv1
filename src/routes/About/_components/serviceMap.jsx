import Reveal from "@/components/animations/reveal/reveal.jsx";

const ServiceMap = () => {
    return (
        <section className='w-full bg-background-primary flex max-lg:flex-col max-lg:items-center justify-between gap-16 pt-5 items-center pb-10'>
            <div className='text-left lg:max-w-[576px] space-y-5 mx-5 text-lg text-white font-normal'>
                <Reveal>
                    <h2 className='text-3xl py-5 font-bold max-lg:text-center'>Masz pytania? Spotkajmy się!</h2>
                    <p className='text-md py-3 font-medium max-lg:text-center text-gray-300'>Umów się z nami na spotkanie w Warszawie, Poznaniu, Kołobrzegu, Trójmieście lub Kwidzynie.</p>
                </Reveal>
            </div>
            {/*Change this to actual localization*/}

            <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1uMT-wyoVgApGS5MsrVl-4jXVET2K1OA&ehbc=2E312F&noprof=1"
                width="100%"
                height="540"
                style={{filter: "hue-rotate(180deg) invert(90%)", maxWidth: "100%"}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

        </section>
    );
};

export default ServiceMap;
