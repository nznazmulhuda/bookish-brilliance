import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Book({ book }) {
	const { bookName, author, image, category, tags, rating, bookId } = book;

	return (
		<>
			<Link to={`/book_details/${bookId}`}>
				<div className="card bg-base-100 shadow-xl p-6 pb-0 border border-[#13131326]">
					<figure className="h-[230px] bg-[#F3F3F3] rounded-2xl">
						<div className="w-[134px] h-[15vh]">
							<img
								className="w-full h-full rounded-lg"
								src={image}
								alt={bookName}
							/>
						</div>
					</figure>
					<div className="card-body px-0 -space-y-1">
						<div className="space-x-3 px-3">
							{tags.map((tag, id) => (
								<small
									key={id}
									className="text-[#23BE0A] font-work text-[16px] font-medium"
								>
									{tag}
								</small>
							))}
						</div>
						<h1 className="card-title text-[#131313] text-2xl font-bold font-play h-16">
							{bookName}
						</h1>
						<p>By : {author}</p>

						<div className="divider mt-0 mb-0"></div>

						<div className="flex justify-between items-center">
							<p className="text-[#131313CC] font-work text-[16px] font-medium">
								{category}
							</p>

							<div className="flex gap-2 items-center">
								<p className="text-[#131313CC] font-work text-[16px] font-medium">
									{rating}
								</p>
								<CiStar size={24} />
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}

Book.propTypes = {
	book: PropTypes.object,
};

export default Book;
