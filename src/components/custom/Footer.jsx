import React from 'react'


export default function Footer() {
  return (
<footer className="px-4 py-8 bg-[#080E2D] text-white pt-3">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-white-600 dark:text-white-300">
      <span className="flex justify-center items-center"><a href="/"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 135" width="180" height="57">
	<title>Harvium-Logo</title>
	<defs>
		<image  width="355" height="75" id="img1" href="data:image/png;base64,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"/>
	</defs>
	<style>
	</style>
	<use id="Background" href="#img1" x="34" y="35"/>
</svg></a></span>
      </div>

      <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61557065762827"
            rel="noreferrer"
            target="_blank"
            className="text-white-700 transition hover:opacity-75 dark:text-white-200"
          >
            <span className="sr-only">Facebook</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/harvium_/"
            rel="noreferrer"
            target="_blank"
            className="text-white-700 transition hover:opacity-75 dark:text-white-200"
          >
            <span className="sr-only">Instagram</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/Harvium_"
            rel="noreferrer"
            target="_blank"
            className="text-white-700 transition hover:opacity-75 dark:text-white-200"
          >
            <span className="sr-only">Twitter</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/@Harvium"
            rel="noreferrer"
            target="_blank"
            className="text-white-700 transition hover:opacity-75 dark:text-white-200"
          >
            <span className="sr-only">Youtube</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

      </ul>
    </div>

    <div
      className="grid grid-cols-1 gap-8 border-t border-white-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-white-800"
    >
      <div>
        <p className="font-medium text-white-900 dark:text-white">Usługi</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Handel
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Blog
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Rolnictwo precyzyjne
            </a>
          </li>

        </ul>
      </div>

      <div>
        <p className="font-medium text-white-900 dark:text-white">O firmie</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              O nas
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Nasza misja
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-white-900 dark:text-white">Pomocne linki</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Kontakt
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              FAQs
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Chat
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-white-900 dark:text-white">Informacje</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Warunki świadczenia usług
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Regulamin
            </a>
          </li>

          <li>
            <a href="#" className="text-white-700 transition hover:opacity-75 dark:text-white-200">
              Bezpieczeństwo i ubezpieczenie
            </a>
          </li>

        </ul>
      </div>
    </div>

    <p className="text-xs text-white-500 dark:text-white-400">
      &copy; 2024. Harvium. Wszystkie prawa zastrzeżone.
    </p>
  </div>
</footer>
  )
}
