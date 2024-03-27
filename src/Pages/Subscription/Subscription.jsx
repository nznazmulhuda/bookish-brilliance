import { useState } from "react";
import { PriceCard, FeatureCard } from "../../Components";
import { useEffect } from "react";

function Subscription() {
	const [priceCards, setPriceCards] = useState([]);
	const [featureCards, setFeatureCards] = useState([]);

	useEffect(() => {
		fetch("/sub.json")
			.then((res) => res.json())
			.then((data) => setPriceCards(data));
		fetch("/feature.json")
			.then((res) => res.json())
			.then((data) => setFeatureCards(data));
	}, []);
	return (
		<>
			<div className="mt-12 container mx-auto">
				<section className="p-4 lg:p-8 bg-[#1313130D] py-20">
					<div className="max-w-2xl mx-auto mb-16 text-center">
						<h2 className="text-4xl font-bold lg:text-5xl">
							Our Features
						</h2>
					</div>
					<div className="container mx-auto space-y-12">
						{featureCards.map((featureCard) => (
							<FeatureCard
								key={featureCard.id}
								featureCard={featureCard}
							/>
						))}
					</div>
				</section>

				<section className="py-20 bg-[#1313130D] rounded-xl px-4 text-[#131313] mt-24">
					<div className="container px-4 mx-auto">
						<div className="max-w-2xl mx-auto mb-16 text-center">
							<span className="font-bold tracking-wider uppercase text-default-400">
								Pricing
							</span>
							<h2 className="text-4xl font-bold lg:text-5xl">
								Choose your best plan
							</h2>
						</div>
						<div className="flex flex-wrap justify-center items-stretch -mx-4">
							{priceCards.map((priceCard) => (
								<PriceCard
									key={priceCard.id}
									priceCard={priceCard}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Subscription;
