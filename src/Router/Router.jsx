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
				path: "/listed-books",
				element: <ListedBooks />,
			},
			{
				path: "pages-to-read",
				element: <PagesToRead />,
			},
			{
				path: "/book-details/:id",
				element: <BookDetails />,
			},
		],
	},
]);

export default router;
