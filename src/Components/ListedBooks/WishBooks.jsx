import { useOutletContext } from "react-router-dom";
import WishBook from "./WishBook";

function WishBooks() {
	const wishBooks = useOutletContext();

	return (
		<>
			<div className="mt-10 space-y-5">
				{wishBooks.map((wishBook) => (
					<WishBook key={wishBook.bookId} readBook={wishBook} />
				))}
			</div>
		</>
	);
}

export default WishBooks;
