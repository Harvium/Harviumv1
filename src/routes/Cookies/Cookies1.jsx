
import { Link } from 'react-router-dom';

export default function Cookies1() {
  return (
<div className="bg-background-primary text-white">
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cookies - ciasteczka</h1>

       <p className="mb-4">
1.	Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.
       </p>

       <p className="mb-4">
2.	Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookie zazwyczaj zawiera nazwę strony internetowej, z której pochodzi, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer. Pliki cookies nie zbierają żadnych informacji przechowywanych na urządzeniu końcowym Użytkownika.
       </p>

       <p className="mb-4">
3.	Podmiotem zamieszczącym na urządzeniu końcowym Użytkownika Serwisu pliki cookie oraz uzyskującym do nich dostęp jest operator Serwisu Harvium.
       </p>

       <p>
4.	Pliki cookie wykorzystywane są w celu:
       </p>
        <ul className="list-disc list-inside mb-4">
            <li>	dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowana do jego indywidualnych potrzeb;</li>
            <li>	tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</li>
            <li>	utrzymania sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła.</li>
        </ul>
        <p className="mb-4">
        5.	W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookie: „sesyjne” oraz „stałe”. Cookie „sesyjne” są plikami tymczasowymi, które przechowywane są na urządzeniu końcowym. Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookie przechowywane są w urządzeniu końcowym. Użytkownika przez czas określony w parametrach plików cookie lub do czasu ich usunięcia przez Użytkownika.
       </p>
       <p>
       6.	W ramach Serwisu stosowane są następujące rodzaje plików cookie:
       </p>
       <ul className="list-disc list-inside mb-4">
            <li>	„niezbędne” pliki cookie, umożliwiające korzystanie z usług dostępnych w ramach Serwisu, np. uwierzytelniające pliki cookie wykorzystywane do usług wymagających uwierzytelniania w ramach Serwisu;</li>
            <li>	pliki cookie służące do zapewnienia bezpieczeństwa, np. wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w ramach Serwisu;</li>
            <li>	„wydajnościowe” pliki cookie, umożliwiające zbieranie informacji o sposobie korzystania ze stron internetowych Serwisu</li>
            <li> 4.	„funkcjonalne” pliki cookie, umożliwiające „zapamiętanie” wybranych przez Użytkownika ustawień i personalizację interfejsu Użytkownika, np. w zakresie wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej itp.</li>
        </ul>
        <p className="mb-4">
        7.	W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookie 
       </p>
    </div>

</div>
  );
}
