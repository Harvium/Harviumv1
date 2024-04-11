import React from 'react'

export default function Footer() {
  return (
        
    <footer className="w-full bg-[#373493] text-white">
		<div className="container flex flex-wrap items-center justify-center sm:justify-between sm:space-y-0">
			<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
				<div className="flex items-center justify-center flex-shrink-0 w-[100px] h-[100px] rounded-full dark:bg-violet-400">
					<img src='src/assets/Harvium-Logo.png' href="./"></img>
				</div>
				<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
					<li>
						<a rel="noopener noreferrer" href="TermsOfUse">Terms of Use</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="">Privacy</a>
					</li>
				</ul>
			</div>
			<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
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
