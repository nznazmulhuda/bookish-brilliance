function Footer() {
	return (
		<>
			<footer className="px-4 py-8 bg-[#1313130D] text-gray-400 mt-12">
				<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
					<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
						<h1 className="text-[#131313] font-work text-3xl font-bold ">
							Book Vibe
						</h1>
						<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
							<li>
								<a rel="noopener noreferrer" href="#">
									Terms of Use
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Privacy
								</a>
							</li>
						</ul>
					</div>
					<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
						<li>
							<a rel="noopener noreferrer" href="#">
								Instagram
							</a>
						</li>
						<li>
							<a rel="noopener noreferrer" href="#">
								Facebook
							</a>
						</li>
						<li>
							<a rel="noopener noreferrer" href="#">
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Footer;
