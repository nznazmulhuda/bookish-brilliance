import { RiMapPinLine, RiGroupLine } from "react-icons/ri";
import { LuFileBarChart } from "react-icons/lu";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ReadBook({ readBook }) {
	const {
		image,
		bookName,
		author,
		tags,
		yearOfPublishing,
		publisher,
		totalPages,
		category,
		rating,
		bookId,
	} = readBook;

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-6 container mx-auto gap-4 border border-[#13131326] p-6 rounded-2xl">
				<div className="lg:col-span-1 h-[50vh] sm:h-[70vh] lg:h-auto bg-[#1313130D] rounded-2xl flex items-center justify-center py-4">
					<img
						className="sm:w-[230px] lg:w-[130px] h-[45vh] sm:h-[60vh] lg:h-[26vh] rounded-lg"
						src={image}
						alt=""
					/>
				</div>

				<div className="lg:col-span-5">
					<h1 className="text-[#131313] font-bold text-2xl font-play">
						{bookName}
					</h1>

					<p className="text-[#131313CC] font-medium text-[16px] font-work mt-2">
						By : {author}
					</p>

					<div className="flex flex-col sm:flex-row lg:flex-row items-center mt-4 gap-4 sm:gap-6 lg:gap-10">
						<p className="text-[#23BE0A] font-work text-[16px] grid justify-center text-center sm:text-left lg:text-left sm:flex lg:flex items-center gap-2 sm:gap-5 lg:gap-5">
							<span className="text-[#131313] font-bold leading-7 font-work">
								Tag
							</span>
							{tags.map((tag) => (
								<span key={tag}>#{tag}</span>
							))}
						</p>

						<div className="divider h-[0.1px] flex sm:hidden lg:hidden mt-0 mb-0 px-6"></div>

						<p className="flex items-center gap-3 text-[#131313CC] font-work text-[16px]">
							<RiMapPinLine /> Year of Publishing:{" "}
							{yearOfPublishing}
						</p>
					</div>

					<div className="divider flex sm:hidden lg:hidden"></div>

					<div className="flex flex-col sm:flex-row lg:flex-row mt-4 items-center gap-4 sm:gap-6 lg:gap-10">
						<p className="flex items-center gap-3 text-[#13131399] text-[16px] font-work">
							{" "}
							<RiGroupLine /> Publisher: {publisher}
						</p>

						<p className="flex items-center gap-3 text-[#13131399] text-[16px] font-work">
							<LuFileBarChart /> Page: {totalPages}
						</p>
					</div>

					<div className="divider w-full"></div>

					<div className="flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-start gap-5">
						<button className="bg-[#328EFF26] text-[#328EFF] py-3 px-5 rounded-2xl">
							Category: {category}
						</button>
						<button className="bg-[#FFAC3326] text-[#FFAC33] py-3 px-5 rounded-2xl">
							Rating: {rating}
						</button>

						<button className="bg-[#23BE0A] text-white py-3 font-medium px-5 rounded-2xl">
							<NavLink to={`/book_details/${bookId}`}>
								View Details
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

ReadBook.propTypes = {
	readBook: PropTypes.object,
};

export default ReadBook;
