/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import {
	getReadBookFromLocalStorage,
	getWishListBookFromLocalStorage,
} from "../../utills/localStorage";

function ListedBooks() {
	const [isSort, setIsSort] = useState(false);
	const [readBooks, setReadBooks] = useState([]);
	const [displayBooks, setDisplayBooks] = useState([]);
	const [displayBooksWish, setDisplayBooksWish] = useState([]);
	const [wishBooks, setWishBooks] = useState([]);

	function handleSort(sortType) {
		if (sortType === "rating") {
			setIsSort(!isSort);
			setDisplayBooks(readBooks.sort((a, b) => a.rating - b.rating));
			setDisplayBooksWish(wishBooks.sort((a, b) => a.rating - b.rating));
		} else if (sortType === "pageNumber") {
			setIsSort(!isSort);
			setDisplayBooks(
				readBooks.sort((a, b) => a.totalPages - b.totalPages)
			);
			setDisplayBooksWish(
				wishBooks.sort((a, b) => a.totalPages - b.totalPages)
			);
		} else if (sortType === "pubsishYear") {
			setIsSort(!isSort);
			setDisplayBooks(
				readBooks.sort(
					(a, b) => a.yearOfPublishing - b.yearOfPublishing
				)
			);
			setDisplayBooksWish(
				wishBooks.sort(
					(a, b) => a.yearOfPublishing - b.yearOfPublishing
				)
			);
		} else {
			setDisplayBooks(readBooks);
		}
	}
	useEffect(() => {
		const books = getReadBookFromLocalStorage();
		const wishBooks = getWishListBookFromLocalStorage();
		fetch("/Books.json")
			.then((res) => res.json())
			.then((data) => {
				setReadBooks(data.filter((d) => books.includes(d.bookId))),
					setDisplayBooks(
						data.filter((d) => books.includes(d.bookId))
					);
				setWishBooks(data.filter((d) => wishBooks.includes(d.bookId))),
					setDisplayBooksWish(
						data.filter((d) => wishBooks.includes(d.bookId))
					);
			});
	}, []);
	return (
		<>
			<div className="container mx-auto bg-[#1313130D] mt-4 rounded-2xl flex h-[100px] items-center justify-center">
				<h1 className="text-[#131313] font-work text-3xl font-bold">
					Books
				</h1>
			</div>

			<div className="flex items-center relative justify-center mt-7">
				<button
					onClick={() => {
						setIsSort(!isSort);
					}}
					className="flex items-center gap-4 py-3 px-10 rounded-lg text-white font-semibold text-lg font-work bg-[#23BE0A] z-30 hover:bg-opacity-90"
				>
					Sort By{" "}
					{isSort ? (
						<MdOutlineKeyboardArrowUp size={30} />
					) : (
						<MdOutlineKeyboardArrowDown size={30} />
					)}
				</button>

				<div
					className={`flex-col absolute top-full p-3 bg-[#1313130D] px-7 -mt-1 space-y-1 ${
						isSort ? "flex" : "hidden"
					}`}
				>
					<button onClick={() => handleSort("rating")}>Rating</button>

					<button onClick={() => handleSort("pageNumber")}>
						Number of pages
					</button>

					<button onClick={() => handleSort("pubsishYear")}>
						Publisher year
					</button>
				</div>
			</div>

			<div className="container mx-auto space-x-5 mt-10 border-b">
				<NavLink
					to={""}
					className="text-[#131313CC] font-work text-lg btn"
				>
					Read Books
				</NavLink>

				<NavLink
					to={"wishlist"}
					className="text-[#131313CC] font-work text-lg btn"
				>
					Wishlist Books
				</NavLink>
			</div>

			<Outlet context={{ displayBooks, displayBooksWish }} />
		</>
	);
}

export default ListedBooks;
