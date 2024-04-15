import Reveal from "@/components/animations/reveal/reveal.jsx";

const ServiceMap = () => {
    return (
        <section className='w-full bg-background-primary flex max-lg:flex-col max-lg:items-center justify-end gap-16'>
            <div className='text-left lg:max-w-[576px] space-y-5 mx-5 text-lg text-white font-normal'>
                <Reveal>
                    <h2 className='text-3xl py-5 font-bold max-lg:text-center'>Umów się z nami na spotkanie w Warszawie</h2>
                </Reveal>
                <Reveal>
                    <p></p>
                </Reveal>
            </div>
            {/*Change this to actual localization*/}

                <iframe
                    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=plac%20Defilad%201%20Warsaw+(Palac)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="540"
                    style={{filter: "hue-rotate(180deg) invert(90%)", maxWidth: "900px"}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

        </section>
    );
};

export default ServiceMap;
