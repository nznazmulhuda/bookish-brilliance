import BooksNotFound from "../BooksNotFound/BooksNotFound";
import ReadBook from "./ReadBook";
import { useOutletContext } from "react-router-dom";

function ReadBooks() {
	const { displayBooks } = useOutletContext();
	return (
		<>
			<div className="mt-10 space-y-5">
				{displayBooks.length > 0 ? (
					displayBooks.map((readBook) => (
						<ReadBook key={ReadBook.bookId} readBook={readBook} />
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

export default ReadBooks;
