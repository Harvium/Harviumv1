import Reveal from "@/components/animations/reveal/reveal.jsx";

const ServiceMap = () => {
    return (
        <section className='w-full bg-black flex max-lg:flex-col max-lg:items-center justify-end gap-16'>
            <div className='text-left lg:max-w-[576px] space-y-5 mx-5 text-lg font-normal'>
                <Reveal>
                    <h2 className='text-5xl py-5 font-bold max-lg:text-center'>Lorem ipsum</h2>
                </Reveal>
                <Reveal>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </Reveal>
                <Reveal>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </Reveal>
                <Reveal>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </Reveal>
            </div>
            {/*Change this to actual localization*/}

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7640.096004830674!2d8.517766965798227!3d47.38888469715781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a4748aa2f71%3A0x4e9e32bac8607920!2sibis%20budget%20Zurich%20City%20West!5e0!3m2!1spl!2spl!4v1711217026493!5m2!1spl!2spl"
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
