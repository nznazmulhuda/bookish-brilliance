import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
	ErrorPage,
	PagesToRead,
	ListedBooks,
	Home,
	BookDetails,
} from "../Pages";

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
