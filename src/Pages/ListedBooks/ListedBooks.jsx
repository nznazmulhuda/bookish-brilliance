/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
	const [sortName, setSortName] = useState("Sort By");
	const [readBooks, setReadBooks] = useState([]);
	const [displayBooks, setDisplayBooks] = useState([]);
	const [displayBooksWish, setDisplayBooksWish] = useState([]);
	const [wishBooks, setWishBooks] = useState([]);
	const [tabIndex, setTabIndex] = useState(0);

	function handleSort(sortType) {
		if (sortType === "rating") {
			setIsSort(!isSort);
			setSortName("Rating");
			setDisplayBooks(readBooks.sort((a, b) => b.rating - a.rating));
			setDisplayBooksWish(wishBooks.sort((a, b) => b.rating - a.rating));
		} else if (sortType === "pageNumber") {
			setIsSort(!isSort);
			setSortName("Page Number");
			setDisplayBooks(
				readBooks.sort((a, b) => b.totalPages - a.totalPages)
			);
			setDisplayBooksWish(
				wishBooks.sort((a, b) => b.totalPages - a.totalPages)
			);
		} else if (sortType === "pubsishYear") {
			setIsSort(!isSort);
			setSortName("Publish Year");
			setDisplayBooks(
				readBooks.sort(
					(a, b) => b.yearOfPublishing - a.yearOfPublishing
				)
			);
			setDisplayBooksWish(
				wishBooks.sort(
					(a, b) => b.yearOfPublishing - a.yearOfPublishing
				)
			);
		} else {
			setDisplayBooks(readBooks);
		}
	}
	useEffect(() => {
		const books = getReadBookFromLocalStorage();
		const wishBooks = getWishListBookFromLocalStorage();
		fetch("https://assignment-8-json-data.vercel.app/Books.json")
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
			<div className="container mx-auto bg-[#1313130D] mt-3 sm:mt-6 lg:mt-12 rounded-2xl flex h-[60px] sm:h-[80px] lg:h-[100px] items-center justify-center">
				<div className="text-[#131313] font-work text-3xl font-bold">
					{tabIndex === 0
						? `Read Books: ${displayBooks.length}`
						: `Wishlist Books: ${displayBooksWish.length}`}
				</div>
			</div>

			<div className="flex items-center  justify-center mt-2 sm:mt-3 lg:mt-5">
				<div
					key={"sortButton"}
					onClick={() => {
						setIsSort(!isSort);
					}}
					onBlur={() => setIsSort(!isSort)}
					className="flex items-center relative gap-4 py-2 px-4 sm:px-10 lg:px-10 justify-between w-[50%] sm:w-[30%] lg:w-[20%] rounded-lg text-white font-semibold text-xs sm:text-sm lg:text-lg font-work bg-[#23BE0A] hover:bg-opacity-90 cursor-pointer"
				>
					{sortName}{" "}
					{isSort ? (
						<MdOutlineKeyboardArrowUp size={30} />
					) : (
						<MdOutlineKeyboardArrowDown size={30} />
					)}
					<div
						className={`flex-col absolute top-full p-2 bg-[#1313130D] px-7 -mt- w-full text-xs sm:text-sm lg:text-lg rounded-xl -translate-x-[17px] sm:-translate-x-[40px] lg:-translate-x-[40px] space-y-1 text-black ${
							isSort ? "flex" : "hidden"
						}`}
					>
						<button onClick={() => handleSort("rating")}>
							Rating
						</button>

						<button onClick={() => handleSort("pageNumber")}>
							Number of pages
						</button>

						<button onClick={() => handleSort("pubsishYear")}>
							Publisher year
						</button>
					</div>
				</div>
			</div>

			<Tabs
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
				className="container mx-auto mt-16"
			>
				<TabList>
					<Tab>
						<button>
							<NavLink
								to={""}
								className="text-[#131313CC] font-work text-xs sm:text-sm lg:text-lg p-0 sm:p-2 lg:p-4"
							>
								Read Books
							</NavLink>
						</button>
					</Tab>

					<Tab>
						<button>
							<NavLink
								to={"wishlist"}
								className="text-[#131313CC] font-work text-xs sm:text-sm lg:text-lg p-0 sm:p-2 lg:p-4"
							>
								Wishlist Books
							</NavLink>
						</button>
					</Tab>
				</TabList>

				<TabPanel>
					<Outlet context={{ displayBooks, displayBooksWish }} />
				</TabPanel>

				<TabPanel>
					<Outlet context={{ displayBooks, displayBooksWish }} />
				</TabPanel>
			</Tabs>
		</>
	);
}

export default ListedBooks;
