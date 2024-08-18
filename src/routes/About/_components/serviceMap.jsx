import Reveal from "@/components/animations/reveal/reveal.jsx";

const ServiceMap = () => {
    return (
        <section className='w-full bg-background-primary flex max-lg:flex-col max-lg:items-center justify-between gap-16 pt-5 items-center pb-10'>
            <div className='text-left lg:max-w-[576px] space-y-5 mx-5 text-lg text-white font-normal ml-15'>
                <Reveal>
                    <h2 className='text-3xl py-5 font-bold max-lg:text-center'>Masz pytania? Spotkajmy się!</h2>
                    <div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Chmielna 2/31, 00-020 Warszawa</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+48 784-852-271</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@harvium.com</span>
				</p>
                <p className="flex items-center">
					
					<span>NIP: 5253010793</span>
				</p>
			</div>

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
