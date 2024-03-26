import { Link } from "react-router-dom";
import BannerImage from "/banner.png";
import "./Banner.css";

function Banner() {
	return (
		<>
			<section className="background bg-no-repeat mt-12 container mx-auto text-[#000000f6] rounded-3xl">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left w-[45%]">
						<h1 className="text-[56px] font-bold leading-[84px] font-Play drop-shadow-lg">
							<span className="font-bold bg-gradient-to-r from-green-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
								Discovering
							</span>{" "}
							the world of books
						</h1>

						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link
								to={"/listed_books"}
								className="relative transition duration-300 hover:bg-green-500 ease bg-[#23BE0A] py-5 px-7 rounded-lg text-white font-bold text-xl font-work mt-12"
							>
								<span className="absolute bottom-0 left-0 h-full -ml-2">
									<svg
										viewBox="0 0 487 487"
										className="w-auto h-full opacity-100 object-stretch"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
											fill="#FFF"
											fillRule="nonzero"
											fillOpacity=".1"
										></path>
									</svg>
								</span>
								<span className="absolute top-0 right-0 w-12 h-full -mr-3">
									<svg
										viewBox="0 0 487 487"
										className="object-cover w-full h-full"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
											fill="#FFF"
											fillRule="nonzero"
											fillOpacity=".1"
										></path>
									</svg>
								</span>
								<span className="relative">View The List</span>
							</Link>
						</div>
					</div>

					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src={BannerImage}
							alt="Banner image"
							className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;
