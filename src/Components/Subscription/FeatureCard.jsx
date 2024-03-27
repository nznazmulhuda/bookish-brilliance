import PropTypes from "prop-types";

function FeatureCard({ featureCard }) {
	const { id, feature_title, feature, feature_image } = featureCard;

	return (
		<>
			<div
				className={`flex flex-col overflow-hidden rounded-xl border p-5 shadow-sm ${
					id % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
				}`}
			>
				<img
					src={feature_image}
					alt={feature_title}
					className="h-80 aspect-video rounded-lg"
				/>
				<div className="flex flex-col justify-center flex-1 p-6">
					<span className="text-xs uppercase text-[]#131313">
						Join, its free
					</span>
					<h3 className="text-3xl font-bold text-[#131313]">{feature_title}</h3>
					<p className="my-6 text-[#131313] font-work">{feature}</p>
					<button type="button" className="self-start">
						Action
					</button>
				</div>
			</div>
		</>
	);
}

FeatureCard.propTypes = {
	featureCard: PropTypes.object,
};

export default FeatureCard;
