import { PropagateLoader } from "react-spinners";
import PorpTypes from "prop-types";

function Spinner({ tog }) {
	return (
		<>
			<div
				className={`justify-center items-center pt-10 ${
					tog ? "flex" : "hidden"
				}`}
			>
				<PropagateLoader color="#36d7b7" />
			</div>
		</>
	);
}

Spinner.propTypes = {
	tog: PorpTypes.bool,
};

export default Spinner;
