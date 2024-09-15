import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ButtonTrade from '../components/custom/Buttons/ButtonTrade';
import Modal from '../components/custom/Login/Modal.jsx';
import ModalRegister from '../components/custom/Login/ModalRegister.jsx';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track the menu dropdown
  const menuRef = useRef(null); // Ref for the dropdown menu

  // Function to toggle the menu dropdown
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle click outside to close the menu dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#080E2D] dark:bg-[#080E2D] sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-99 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 135" width="125" height="50">
                <title>Naciśnij i przekieruję Cię na stronę główną</title>
                <desc>Harvium logo</desc>
                <defs>
                  <image width="355" height="75" id="img1" href="data:image/png;base64,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" />
                </defs>
                <use id="Background" href="#img1" x="34" y="35" />
              </svg>            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link to="https://app.harvium.pl">
                    <ButtonTrade>Handluj</ButtonTrade>
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white/75" to="/Services">
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white/75" to="/Products">
                    Produkty
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white/75" to="/About">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white/75" to="/Contact">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white/75" to="http://news.harvium.pl/">
                    Wiadomości
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white/75" to="/PrecisionFarming">
                    Rolnictwo precyzyjne
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Modal />
              <div className="hidden sm:flex">
                <ModalRegister />
              </div>
            </div>

            {/* Mobile menu */}
            <div className="block md:hidden" ref={menuRef}>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                Menu
              </button>
              {menuOpen && (
                <ul className="absolute right-1 mt-2 px-4 bg-[#080E2D] shadow-lg rounded-lg space-y-1">
                  <li className="border-b border-gray-400">
                    <Link
                      to="/Trade"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-yellow-500"
                    >
                      Handluj
                    </Link>
                  </li>
                  <li className="border-b border-gray-400">
                    <Link
                      to="/Services"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                    >
                      Usługi
                    </Link>
                  </li>
                  <li className="border-b border-gray-400">
                    <Link
                      to="/Products"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                    >
                      Produkty
                    </Link>
                  </li>
                  <li className="border-b border-gray-400">
                    <Link
                      to="/About"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                    >
                      O nas
                    </Link>
                  </li>
                  <li className="border-b border-gray-400">
                    <Link
                      to="/Contact"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                    >
                      Kontakt
                    </Link>
                  </li>
                  <li className="border-b border-gray-400">
                    <Link
                      to="http://news.harvium.pl/"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                    >
                      Wiadomości
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PrecisionFarming"
                      className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                    >
                      Rolnictwo precyzyjne
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
