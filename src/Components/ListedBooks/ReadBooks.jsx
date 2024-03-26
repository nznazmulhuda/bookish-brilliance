import ReadBook from "./ReadBook";
import { useOutletContext } from "react-router-dom";

function ReadBooks() {
	const { displayBooks } = useOutletContext();
	return (
		<>
			<div className="mt-10 space-y-5">
				{displayBooks.map((readBook) => (
					<ReadBook key={readBook.bookId} readBook={readBook} />
				))}
			</div>
		</>
	);
}

export default ReadBooks;
