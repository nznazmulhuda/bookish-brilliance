import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getReadBookFromLocalStorage } from "../../utills/localStorage";
import PropTypes from "prop-types";
import BooksNotFound from "../../Components/BooksNotFound/BooksNotFound";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${
		x + width / 2
	},${y + height / 3}
${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
		x + width
	}, ${y + height}
Z`;
};

const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;

	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
	const [data, setdata] = useState([]);

	useEffect(() => {
		const books = getReadBookFromLocalStorage();
		fetch("https://assignment-8-json-data.vercel.app/Books.json")
			.then((res) => res.json())
			.then((datas) => {
				setdata(datas.filter((d) => books.includes(d.bookId)));
			});
	}, []);
	return (
		<>
			{data.length > 0 ? (
				<>
					<div
						className={`hidden lg:flex items-center container mx-auto justify-center bg-[#13131308] mt-12 rounded-2xl p-10`}
					>
						<BarChart
							width={1500}
							height={500}
							data={data}
							margin={{
								top: 15,
								right: 30,
								left: 0,
								bottom: 10,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="bookName" />
							<YAxis />
							<Bar
								dataKey="totalPages"
								fill="#8884d8"
								shape={<TriangleBar />}
								label={{ position: "top" }}
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={colors[index % 20]}
									/>
								))}
							</Bar>
						</BarChart>
					</div>

					<div
						className={`hidden sm:flex lg:hidden items-center container mx-auto justify-center bg-[#13131308] mt-3 rounded-2xl`}
					>
						<BarChart
							width={800}
							height={350}
							data={data}
							margin={{
								top: 15,
								right: 30,
								left: 0,
								bottom: 10,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="bookName" />
							<YAxis />
							<Bar
								dataKey="totalPages"
								fill="#8884d8"
								shape={<TriangleBar />}
								label={{ position: "top" }}
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={colors[index % 20]}
									/>
								))}
							</Bar>
						</BarChart>
					</div>

					<div
						className={`flex sm:hidden lg:hidden items-center container mx-auto justify-center bg-[#13131308] mt-3 rounded-2xl`}
					>
						<BarChart
							width={500}
							height={350}
							data={data}
							margin={{
								top: 15,
								right: 30,
								left: 0,
								bottom: 10,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="bookName" />
							<YAxis />
							<Bar
								dataKey="totalPages"
								fill="#8884d8"
								shape={<TriangleBar />}
								label={{ position: "top" }}
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={colors[index % 20]}
									/>
								))}
							</Bar>
						</BarChart>
					</div>
				</>
			) : (
				<BooksNotFound />
			)}
		</>
	);
};

TriangleBar.propTypes = {
	fill: PropTypes.string,
	x: PropTypes.number,
	y: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default PagesToRead;
