import PropTypes from "prop-types";

function PriceCard({ priceCard }) {
	const { subscription_name, price, description, features } = priceCard;

	return (
		<>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow sm:p-8 bg-[#1313138d] text-[#131313]">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold font-work">
							{subscription_name}
						</h4>
						<span className="text-6xl font-bold">
							{price}
							<span className="text-sm tracking-wide">
								/month
							</span>
						</span>
					</div>
					<p className="mt-3 leading-relaxed font-work">
						{description}
					</p>
					<ul className="flex-1 mb-6 text-gray-400">
						{features.map((feature, id) => (
							<li key={id} className="flex mb-2 space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="flex-shrink-0 w-6 h-6 text-default-400"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="text-[#131313] font-work font-semibold">
									{feature}
								</span>
							</li>
						))}
					</ul>
					<button
						type="button"
						className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded-lg bg-[#13131390] text-white"
					>
						Get Started
					</button>
				</div>
			</div>
		</>
	);
}

PriceCard.propTypes = {
	priceCard: PropTypes.object,
};

export default PriceCard;
