import toast from "react-hot-toast";

export const getReadBookFromLocalStorage = () => {
	const strBooks = localStorage.getItem("read");
	if (strBooks) {
		return JSON.parse(strBooks);
	}

	return [];
};

export const getWishListBookFromLocalStorage = () => {
	const strBooks = localStorage.getItem("wish");
	if (strBooks) {
		return JSON.parse(strBooks);
	}

	return [];
};

export const setReadBook = (id) => {
	const oldReadId = getReadBookFromLocalStorage();
	if (oldReadId.find((ID) => ID === id)) {
		toast.error("Already exists! Check Listed Books");
	} else {
		localStorage.setItem("read", JSON.stringify([id, ...oldReadId]));
		toast.success("Congratulations! You read this book.");
	}
};

export const setWishBook = (id) => {
	const oldWishId = getWishListBookFromLocalStorage();
	const oldReadId = getReadBookFromLocalStorage();

	if (
		oldWishId.find((ID) => ID === id) ||
		oldReadId.find((ID) => ID === id)
	) {
		if (oldReadId.find((ID) => ID === id)) {
			return toast.error("Already exists in read book!");
		}
		return toast.error("Already exists is wishlist!");
	} else {
		localStorage.setItem("wish", JSON.stringify([id, ...oldWishId]));
		toast.success("Success to add wishlist!");
	}
};
