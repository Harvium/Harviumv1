// FAQ page

import { Link } from 'react-router-dom';

export default function Cont0() {
  return (
<div className="space-y-4 bg-background-primary x-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
<div className="text-center">
      <h2 className="text-3xl font-bold sm:text-3xl text-white">Najczęściej zadawane pytania</h2>

      <p className="mt-4 text-white">
        W tej sekcji znajdziesz najczęściej zadawane pytania przez naszych klientów. Jeśli jednak, któraś z odpowiedzi nie rozwiązuje Twoich wątpliwości to skontaktuj się z nami.
      </p>
    </div>
      
      <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Jak mogę złożyć zamówienie?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Skontaktuj się z nami, albo skorzystaj z dostępnego formularza w zakładce Kontakt.
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Dlaczego nie mogę kupić produktów za pośrednictwem strony?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Jesteśmy w trakcie rozwoju naszej oferty produktowej i poprawy dostępności określonych produktów. Nie jesteśmy w stanie jeszcze zagwarantować natychmiastowej dostawy większych ilości produktów. Uważamy, że nasza bezpośrednia obsługa zapewni Ci w chwili obecnej najwyższą możliwą jakość obsługi.
    </p>
  </details>
      
  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Czym wasza oferta różni się od pośredników?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Nasze marże są przede wszystkim minimalne. Docelowo chcemy stworzyć wystandaryzowany rynek produktów, w którym każdy będzie mógł skorzystać z dostępnej ceny. My zajmiemy się weryfikacją jakości, a Ty będziesz cieszył się z możliwości sprzedaży i zakupu produktów po cenie rynkowej. Ponadto z nami jesteś w stanie rozwinąć swoją działalność, ponieważ oferujemy cały pakiet usług. Potrzebujesz dokładnych danych dla swoich upraw? Zajrzyj do zakładki Rolnictwo Precyzyjne!
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Co oferujecie w ramach Rolnictwa Precyzyjnego?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
      Na podstawie posiadanych przez nas danych satelitarnych jesteśmy w stanie przygotować szczegółowy raport dla Twojej działalności. Z nami jesteś w stanie uzyskać informacje na temat stanu Twojego gospodarstwa, przewidywanych zbiorów, ale również potencjalnych zagrożeń. Skontaktuj się z nami, aby umówić się na spotkanie podczas, którego opowiemy Ci więcej na temat tej usługi.
    </p>
  </details>


  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Dlaczego ceny w zakładce Handluj zmieniają się?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Nasze ceny są odzwierciedleniem sił popytu i podaży na rynku. Nasze ceny są efektem połączenia wielu dostępnych źródeł. To nasi klienci dostarczają nam dane. Docelowo ceny będą odświeżane w czasie rzeczywistym i to Ty będziesz decydował, czy jest ona dla Ciebie odpowiednia. 
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Jakie są dostępne metody płatności?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Na chwilę obecną dostępne są płatności przelewami bankowymi. W najbliższym czasie udostępnimy wszystkie możliwości płatności. Jeśli preferujesz inną formę płatności to skontaktuj się z nami. Nasze rozwiązania tworzymy dla Ciebie.
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Co będę potrzebował przy składaniu zamówienia?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
    Typowe zapytanie produktowe może zawierać:
o	Opis produktu: Konkretna nazwa produktu lub jego specyfikacja.
o	Ilość: Żądana ilość produktu lub wskazówka dotycząca zakresu ilości.
o	Warunki dostawy: Preferowane terminy dostawy, lokalizacja dostawy lub specyficzne wymagania dotyczące transportu.
o	Specyfikacje techniczne: W przypadku produktów przemysłowych mogą to być szczegółowe wymagania dotyczące jakości, norm i standardów.
o	Warunki płatności: Ewentualne preferencje dotyczące warunków płatności.
o	Dane kontaktowe: Informacje umożliwiające dostawcy skontaktowanie się z osobą składającą zapytanie.
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Jak długo trwa dostawa?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Czas dostawy jest uzależniony od sposobu dostawy oraz dostępności firm przewozowych. Staramy się, aby cały proces nie trwał dłużej niż 7 dni.
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Jakie formy dostawy są dostępne?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
     Nasze rozwiązania są indywidualnie dostosowywane pod określonego klienta. Standardowo cena produktów uwzględnia dostawę na podstawie zasad Incoterms® EXW oraz FCA. 
    </p>
  </details>

  <details
    className="group border-s-4 border-violet-950 bg-transparent bg-violet-950/40 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-white">
        Czy mogę liczyć na jakieś rabaty?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-black sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white">
      Na chwilę obecną oferujemy minimalną marżę dla nowych klientów. Zgadzając się na warunki współpracy na tym etapie otrzymujesz również gwarancję bezpłatnego dostępu do platformy handlowej w ramach umowy naszej współpracy. 
    </p>
  </details>


</div>
  );
}
