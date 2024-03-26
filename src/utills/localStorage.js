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

// User id, User name, User Details save on local storage

export const allUsers = () => {
	let users = localStorage.getItem("users");
	if (users) {
		return JSON.parse(users);
	}
	return [];
};

export const setNewUser = (u, navigate) => {
	let oldUsers = allUsers();
	let isExist = oldUsers.find(
		(oldUser) =>
			oldUser.userName === u.userName || oldUser.email === u.email
	);

	if (isExist) {
		return toast.error("Already have an account!");
	} else {
		localStorage.setItem("users", JSON.stringify([...oldUsers, u]));
		navigate("/signIn");
		return toast.success("Account registerd!");
	}
};
