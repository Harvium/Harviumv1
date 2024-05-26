import React from 'react'
import { Link } from 'react-router-dom';
import ButtonTrade from '../components/custom/Buttons/ButtonTrade';
import Modal from '../components/custom/Login/Modal.jsx';
import ModalRegister from '../components/custom/Login/ModalRegister.jsx';
// import { Button } from '../ui/button'

export default function NavBar() {
  return (
<header className="bg-[#080E2D] dark:bg-[#080E2D]-900 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-99 z-50" >
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
    <div className="md:flex md:items-center md:gap-12">
        <Link className="block text-teal-600 dark:text-teal-600" to="/">
          <span className="sr-only">Home</span>
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 135" width="140" height="50">
	<title>Naciśnij i przekieruję Cię na stronę główną - Jesteśmy dla Ciebie</title>
	<defs>
		<image  width="355" height="75" id="img1" href="data:image/png;base64,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"/>
	</defs>
	<use id="Background" href="#img1" x="34" y="35"/>
</svg>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          
          <ul className="flex items-center gap-6 text-sm">    
            <li>
              <Link to="/Trade">
                <ButtonTrade>Handluj</ButtonTrade>
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                to="/Services"
              >
                Usługi
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                to="/Products"
              >
                Produkty
              </Link>
            </li>

            <li >
              <Link
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75 whitespace-nowrap"
                to="/About"
              >
                O nas
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                to="/Contact"
              >
                Kontakt
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                to="http://blog.harvium.pl/"
              >
                Wiadomości
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                to="/PrecisionFarming"
              >
                Rolnictwo precyzyjne
              </Link>
            </li>

            <li></li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Modal>
          </Modal>

          <div className="hidden sm:flex">
            <ModalRegister>
            </ModalRegister>
          </div>
        </div>

        <div className="block md:hidden">
              <ul className="space-y-1">
                <li>
                  <details className="group relative">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                      <span className="text-sm font-medium"> Menu </span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="absolute right-1 mt-2 px-4 bg-[#080E2D] shadow-lg rounded-lg">
                      <li className="border-b border-gray-400">
                        <Link
                          to="/Trade"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-[#0c1544] hover:text-yellow-500"
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
                        <Link to="http://blog.harvium.pl/"
                          className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                        >
                          Wiadomości
                        </Link>
                      </li>

                      <li >
                        <Link
                          to="/PrecisionFarming"
                          className="block rounded-lg px-4 py-2 text-xs font-medium text-white hover:bg-[#0c1544] hover:text-gray-300"
                        >
                          Rolnictwo precyzyjne
                        </Link>
                      </li>

                      {/*
                        <li>
                          <form action="#">
                            <button
                              type="submit"
                              className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                            >
                              Wyloguj
                            </button>
                          </form>
                        </li>
                        */}
                    </ul>
                  </details>
                </li>
              </ul>
        </div>
        
      </div>
    </div>
  </div>
</header>

)
}