import { Link } from "react-router-dom";
import BannerImage from "/banner.png";
import "./Banner.css";

function Banner() {
	return (
		<>
			<section className="background bg-no-repeat mt-12 container mx-auto text-[#000000f6] rounded-3xl">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left w-[45%]">
						<h1 className="text-[56px] font-bold leading-[84px] font-Play">
							Discovering the world of books
						</h1>

						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<button className="bg-[#23BE0A] py-5 px-7 rounded-lg text-white font-bold text-xl font-work mt-12">
								<Link to={"/listed_books"}>View The List</Link>
							</button>
						</div>
					</div>

					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src={BannerImage}
							alt=""
							className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;
