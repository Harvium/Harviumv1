import React, { useState } from "react";
import './Modal.css';
import { Link } from 'react-router-dom';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="rounded-md bg-#080E2D-100 px-5 py-2.5 text-sm font-medium text-white dark:bg-#080E2D-800 hover:text-gray-400">
        Rejestracja
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">Zaloguj lub zarejestruj się klikając w poniższy przycisk.</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
    Rejestrując się uzyskasz dostęp do notowań produktów, możliwości dodawania ogłoszeń i zawierania transakcji. 
    </p>
    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
    Ponadto uzyskasz dostęp do sklepu, wiadomości, raportów oraz narzędzi rolnictwa precyzyjnego. 
    </p>
    <div className="flex justify-center mt-4">
    <Link to ="https://app.harvium.pl/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Zaloguj / Zarejestruj się 
        </button>
        </Link>
      </div>    
      <div className="mx-auto mt-4 max-w-md text-center text-white">
    Dostęp do platformy jest bezpłatny, a pozostałe koszty zostały wymienione przy usługach i w {' '}
      <Link to ="/TermsOfUse" className="underline hover:no-underline text-blue-500">
        regulaminie
      </Link>
      .
    </div>

    {/*<form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">...</p>

      <div>
        <label htmlFor="email" className="sr-only">...</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="..."
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">...</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="..."
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        ...
      </button>

      <p className="text-center text-sm text-gray-500">
        ...
      <Link className="underline" to="/#">...</Link>
      </p>
      <button 
    className="inline-block rounded-full border-2 border-solid border-indigo-600 p-3 text-indigo-600 text-xs font-bold hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500" 
    onClick={toggleModal} 
    style={{position: 'absolute', top: '50px', right: '10px' ,width: '40px', height: '40px'}}
>
    X
</button>
    </form>
    */}

  </div>
</div>
           
          </div>
        </div>
      )}
      
    </>
  );
}
