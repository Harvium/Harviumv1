import React, { useState } from "react";

const FORM_ENDPOINT = "https://forms.zohopublic.eu/harvium/form/HarviumKontakt/formperma/p_g2EZSP148Jb4T5qgwQivEfD_lI-Shg7-OlvRd18wQ/htmlRecords/submit"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="w-full"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Imie"
          name="Name_First"
          className="focus:outline-none focus:ring relative w-full px-2 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Nazwisko"
          name="Name_Last"
          className="focus:outline-none focus:ring relative w-full px-2 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="Email"
          className="focus:outline-none focus:ring relative w-full px-2 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Numer Telefonu"
          name="PhoneNumber_countrycode"
          className="focus:outline-none focus:ring relative w-full px-2 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Twoja Wiadomość"
          name="SingleLine"
          className="focus:outline-none focus:ring relative w-full px-2 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3 flex justify-center">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;