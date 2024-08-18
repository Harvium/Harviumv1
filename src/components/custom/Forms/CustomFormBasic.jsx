import React, { useState } from "react";

const FORM_ENDPOINT = 'https://forms.zohopublic.eu/harvium/form/HarviumKontakt/formperma/p_g2EZSP148Jb4T5qgwQivEfD_lI-Shg7-OlvRd18wQ/htmlRecords/submit';
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Błędny adres e-mail");
    } else {
      setEmailError("Brak adresu e-mail");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      return;
    }

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
        console.log(err)
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Dziękujemy!</div>
        <div className="text-md">Skontaktujemy się z Tobą wkrótce.</div>
      </>
    );
  }

  return (
    <section className="bg-background-primary">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12 lg:border-r lg:border-gray-200">
            <p className="max-w-xl text-2xl text-white font-bold">
              Potrzebujesz indywidualnej obsługi?
            </p>
            

            <div className="mt-8">
              <p className="text-xl font-bold text-white">Jesteśmy dla Ciebie.</p>

              <p className="mt-2 text-lg not-italic text-gray-200">Skorzystaj z formularza, a my zatroszczymy się o profesjonalną obsługę Twojego zgłoszenia.</p>
            </div>
          </div>


          <div className="rounded-lg bg-blue p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="Name_first">Name_first</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    name="Name_First"
                    placeholder="Imię"
                    type="text"
                    id="Name_first"
                  />
                </div>

                <div>
                  <label className="sr-only" name="Name_Last" htmlFor="Name_Last">Name_last</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    name="Name_Last"
                    placeholder="Nazwisko"
                    type="text"
                    id="Name_last"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="Company_Name">Company_Name</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  name="SingleLine"
                  placeholder="Nazwa firmy (opcjonalnie)"
                  type="text"
                  id="Company_Name"
                />
              </div>


              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    name="Email"
                    placeholder="Adres email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <p className="error">{emailError}</p>}
                </div>

                <div>
                  <label className="sr-only" htmlFor="PhoneNumber_countrycode">Phone</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    name="PhoneNumber_countrycodeval"
                    placeholder="Numer telefonu (opcjonalnie)"
                    type="tel"
                    id="PhoneNumber_countrycode"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  name="MultiLine"
                  placeholder="Wpisz tutaj swoją wiadomość, a jeżeli oczekujesz kontaktu telefonicznego to wypełnij pole z numerem telefonu..."
                  rows="8"
                  id="message"
                  required
                ></textarea>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-purple-900 px-20 py-4 text-medium font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
