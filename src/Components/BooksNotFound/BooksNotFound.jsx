import { Link } from "react-router-dom";

function BooksNotFound() {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-[50vh]">
				<h1 className="text-5xl font-bold font-work mb-5">
					Books are not added!
				</h1>
				<p className="text-xl font-semibold font-play">
					Go to{" "}
					<button className="text-2xl text-green-600 font-bold underline px-2">
						<Link to={"/"}>Homepage</Link>
					</button>{" "}
					to add books.
				</p>
			</div>
		</>
	);
}

export default BooksNotFound;
