import { useOutletContext } from "react-router-dom";
import WishBook from "./WishBook";

function WishBooks() {
    const { displayBooksWish } = useOutletContext();
	console.log(displayBooksWish);

	return (
		<>
			<div className="mt-10 space-y-5">
				{displayBooksWish.map((wishBook) => (
					<WishBook key={wishBook.bookId} readBook={wishBook} />
				))}
			</div>
		</>
	);
}

export default WishBooks;
