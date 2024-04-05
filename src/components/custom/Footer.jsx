import React from 'react'

export default function Footer() {
  return (
        
    <footer class="px-4 py-8 bg-[#080E2D] text-white pt-3">
	<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div class="flex items-center justify-center flex-shrink-0 w-[100px] h-[100px] rounded-full dark:bg-violet-400">
				<img src='src/assets/Harvium-Logo.png' href="./"></img>
			</div>
			<ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="TermsOfUse">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="">Privacy</a>
				</li>
			</ul>
		</div>
		<ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="https://www.linkedin.com/company/harvium-sp-z-o-o/about/">Linkedin</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="https://www.youtube.com/@Harvium">YouTube</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61557065762827">Facebook</a>
			</li>
		</ul>
	    </div>
    </footer>

  )
}
