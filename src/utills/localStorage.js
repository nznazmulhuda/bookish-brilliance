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
		alert("ami loacl a asi mamu");
	} else {
		localStorage.setItem("read", JSON.stringify([...oldReadId, id]));
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
			return alert("ami rad a asi");
		}
		return alert("ami wish a asi");
	} else {
		localStorage.setItem("wish", JSON.stringify([...oldWishId, id]));
	}
};
