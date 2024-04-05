import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Reveal from "@/components/animations/reveal/reveal.jsx";


const Service = ({ logo, serviceHeading, serviceDescription, serviceRoute }) => {

    return (
        <div className='flex flex-col justify-center items-center max-w-[405px] font-normal gap-6'>
            <Reveal>
                <img src={logo} className='size-12' alt='service logo'/>
            </Reveal>
            <Reveal>
                <div className='text-2xl font-bold'>{serviceHeading}</div>
            </Reveal>
            <Reveal>
                <p>{serviceDescription}</p>
            </Reveal>
            <Reveal>
                <Link to={serviceRoute} className='flex justify-center items-center gap-1'>
                    <div>Sprawdź ofertę</div>
                    <NavigateNextIcon />
                </Link>
            </Reveal>
        </div>
    );
};

export default Service;
