import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
	ErrorPage,
	PagesToRead,
	ListedBooks,
	Home,
	BookDetails,
} from "../Pages";
import { ReadBooks, WishBooks } from "../Components/";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/listed_books",
				element: <ListedBooks />,
				children: [
					{
						path: "",
						element: <ReadBooks />,
					},
					{
						path: "wishlist",
						element: <WishBooks />,
					},
				],
			},
			{
				path: "pages_to_read",
				element: <PagesToRead />,
			},
			{
				path: "/book_details/:id",
				element: <BookDetails />,
			},
		],
	},
]);

export default router;
