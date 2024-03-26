import { PropagateLoader } from "react-spinners";

function Spinner() {
	return (
		<>
			<div className="flex justify-center items-center pt-10">
				<PropagateLoader color="#36d7b7" />
			</div>
		</>
	);
}

export default Spinner;
