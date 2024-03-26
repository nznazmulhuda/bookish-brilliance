import { useOutletContext } from "react-router-dom";
import WishBook from "./WishBook";
import BooksNotFound from "../BooksNotFound/BooksNotFound";

function WishBooks() {
	const { displayBooksWish } = useOutletContext();

	return (
		<>
			<div className="mt-10 space-y-5">
				{displayBooksWish.length > 0 ? (
					displayBooksWish.map((wishBook) => (
						<WishBook key={wishBook.bookId} readBook={wishBook} />
					))
				) : (
					<div className="-mt-20">
						<BooksNotFound />
					</div>
				)}
			</div>
		</>
	);
}

export default WishBooks;
