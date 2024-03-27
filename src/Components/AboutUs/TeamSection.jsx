import PropTypes from "prop-types";

function TeamSection({ team }) {
	const { name, role, image } = team;
	return (
		<>
			<div className="flex flex-col justify-center m-8 text-center">
				<img
					alt={name}
					className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
					src={image}
				/>
				<p className="text-xl font-semibold leading-tight">{name}</p>
				<p className="text-gray-600">{role}</p>
			</div>
		</>
	);
}

TeamSection.propTypes = {
	team: PropTypes.object,
};

export default TeamSection;
