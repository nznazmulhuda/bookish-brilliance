import { useEffect, useState } from "react";
import Book from "./Book";

function Books() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("https://assignment-8-json-data.vercel.app/Books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<>
			<section className="py-6 sm:py-12 text-[#131313]">
				<div className="container p-6 mx-auto space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-[40px] font-bold font-play">
							Books
						</h2>
					</div>
					<div className="grid grid-cols-3 gap-6">
						{books.map((book) => (
							<Book key={book.bookId} book={book} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Books;
