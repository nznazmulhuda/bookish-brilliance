import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setReadBook, setWishBook } from "../../utills/localStorage";

function BookDetails() {
	const { id } = useParams();

	const [bookDetail, setBookDetail] = useState([]);

	useEffect(() => {
		fetch("https://assignment-8-json-data.vercel.app/Books.json")
			.then((res) => res.json())
			.then((datas) =>
				setBookDetail(datas.filter((data) => data.bookId === id)[0])
			);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const {
		bookName,
		author,
		image,
		category,
		tags,
		rating,
		review,
		totalPages,
		publisher,
		yearOfPublishing,
		bookId,
	} = bookDetail || [];
	return (
		<>
			<section className="mt-5 container mx-auto">
				<div className="lg:grid grid-cols-2 items-center gap-6 p-4 sm:p-6 lg:p-0">
					<div className="h-[80vh] sm:h-[90vh] lg:h-[75vh] bg-[#1313130D] flex items-center justify-center rounded-3xl">
						<img
							className="w-[80%] sm:w-[40%] lg:w-3/5 h-[67vh] sm:h-[80vh] lg:h-[70vh] rounded-lg"
							src={image}
							alt={bookName}
						/>
					</div>

					<div className="flex flex-col justify-between mt-4 lg:mt-0">
						<h1 className="text-[#131313] text-2xl sm:text-[30px] lg:text-[40px] font-bold font-play">
							{bookName}
						</h1>

						<p className="text-[#131313CC] text-sm sm:text-lg lg:text-xl font-medium mt-2 sm:mt-4 lg:mt-6 font-work">
							By: {author}{" "}
						</p>

						<div className="divider m-0 sm:my-1 lg:my-2"></div>

						<p className="text-[#131313CC] text-sm sm:text-lg lg:text-xl font-medium font-work">
							{category}
						</p>

						<div className="divider m-0 sm:my-1 lg:my-2"></div>

						<p className="text-[16px] font-work leading-7 font-normal">
							<span className="text-[#131313] font-bold">
								Review:{" "}
							</span>
							{review}
						</p>
						<p className="text-[#23BE0A] font-medium text-[16px] font-work flex items-center gap-5 mt-6">
							<span className="text-[#131313] font-bold">
								Tag
							</span>{" "}
							{tags &&
								tags.map((tag) => (
									<span key={tag}>#{tag}</span>
								))}
						</p>

						<div className="divider"></div>

						<div className="grid grid-cols-2 items-center">
							<div className="text-[#131313B2] font-normal text-[16px] leading-7 font-work space-y-3">
								<p>Number of Pages:</p>
								<p>Publisher:</p>
								<p>Year of Publishing:</p>
								<p>Rating:</p>
							</div>

							<div className="text-[#131313] font-work font-semibold leading-7 text-[16px] space-y-3">
								<h3>{totalPages}</h3>
								<h3>{publisher}</h3>
								<h3>{yearOfPublishing}</h3>
								<h3>{rating}</h3>
							</div>
						</div>

						<div className="mt-8 flex justify-center lg:justify-start gap-4">
							<button
								onClick={() => {
									setReadBook(bookId);
								}}
								className="py-2 sm:py-3 lg:py-[18px] px-4 sm:px-5 lg:px-7 rounded-lg text-[#131313] text-lg font-semibold font-work border border-[#1313134D] hover:bg-[#1313130c]"
							>
								Read
							</button>

							<button
								onClick={() => {
									setWishBook(bookId);
								}}
								className="py-2 sm:py-3 lg:py-[18px] px-4 sm:px-5 lg:px-7 rounded-lg bg-[#50B1C9] text-white font-semibold text-lg font-work hover:bg-[#50b1c9e2] "
							>
								Wishlist
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BookDetails;
