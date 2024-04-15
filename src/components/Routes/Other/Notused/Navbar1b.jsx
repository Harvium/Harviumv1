 {/* import React from 'react'
// import { Button } from '../ui/button'

export default function NavBar() {
  return (
<header class="bg-[#080E2D] dark:bg-[#080E2D]-900">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
    <div class="md:flex md:items-center md:gap-12">
        <a class="block text-teal-600 dark:text-teal-600" href="/">
          <span class="sr-only">Home</span>
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 135" width="180" height="57">
	<title>Harvium-Logo</title>
	<defs>
		<image  width="355" height="75" id="img1" href="data:image/png;base64,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"/>
	</defs>
	<style>
	</style>
	<use id="Background" href="#img1" x="34" y="35"/>
</svg>
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-white/75"
                href="Trade"
              >
                Handluj
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="Services"
              >
                Usługi
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="Products"
              >
                Produkty
              </a>
            </li>

            <li >
              <a
                class="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="About"
              >
                O nas
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="Contact"
              >
                Kontakt
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            class="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-navyblue shadow dark:hover:bg-teal-500"
            href="#"
          >
            Logowanie
          </a>

          <div class="hidden sm:flex">
            <a
              class="rounded-md bg-#080E2D-100 px-5 py-2.5 text-sm font-medium text-white dark:bg-#080E2D-800 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Rejestracja
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button
            class="rounded bg-white p-2 text-navyblue-600 transition hover:text-yellow-300 dark:bg-white dark:text-white dark:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
        </div>
        
      </div>
    </div>
  </div>
</header>

)
}
*/}