import { useState } from 'react';
import { Button } from '../ui/button';

export default function NavBar() {
  const menuOptions = [
    { content: "Handluj", url: "Handluj" },
    { content: "Usługi", url: "Uslugi" },
    { content: "O nas", url: "About" },
    { content: "Kontakt", url: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-10 w-full top-0 border-b-2 border-[#322F2F] bg-[#373493] flex justify-center max-[1220px]:pb-4">
      <div className="w-3/4 flex justify-between items-center max-[1220px]:flex-col">
        <a href="/">
          <img src='src/assets/Harvium-Logo.png' alt="Harvium Logo" className="object-contain w-[300px] -ml-2" />
        </a>
        <div className="w-2/3 flex gap-4 items-center justify-between max-[1220px]:w-full max-[1220px]:flex-col">
          <div className={`flex text-lg gap-4 ${isOpen ? 'visible' : 'hidden'}`}>
            {menuOptions.map((option) => (
              <a key={option.content} href={option.url} className="transition-all text-white hover:text-yellow-300">
                {option.content}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant={"cta"}>HANDLUJ</Button>
            <Button>Logowanie</Button>
            <Button>Załóż konto</Button>
          </div>
        </div>
        <div className={`absolute top-10 right-10 hamburger-icon cursor-pointer ${isOpen ? 'hidden' : 'visible'}`} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 100 80" fill="white">
            <rect width="100" height="12"></rect>
            <rect y="30" width="100" height="12"></rect>
            <rect y="60" x="40" width="60" height="12"></rect>
          </svg>
        </div>
      </div>
    </nav>
  );
}