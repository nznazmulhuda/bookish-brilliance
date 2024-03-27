import { useEffect, useState } from "react";
import { Faq, Feedback, GetInTouch, TeamSection } from "../../Components";
import { useLoaderData } from "react-router-dom";

function AboutUs() {
	const [feedbacks, setFeedbacks] = useState([]);
	const [faqs, setFaqs] = useState([]);
	const [teams, setTeams] = useState([]);
	const feed = useLoaderData();
	useEffect(() => {
		setFeedbacks(feed);
		fetch("/faq.json")
			.then((res) => res.json())
			.then((data) => setFaqs(data));
		fetch("/team.json")
			.then((res) => res.json())
			.then((data) => setTeams(data));
	}, [feed]);

	return (
		<>
			<div className="container mx-auto pb-12">
				<section className="py-8 bg-[#1313130D] text-[#131313] rounded-xl mt-3 sm:mt-6 lg:mt-12">
					<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
						<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
							Our team
						</h1>
						<p className="max-w-3xl text-center font-work">
							Meet our tight-knit team at Bookish Brilliance .
							With a shared love for books, we deliver concise and
							insightful reviews to help you discover your next
							literary adventure. Join us as we explore the world
							of literature together!
						</p>

						<div className="flex flex-row flex-wrap-reverse justify-center">
							{teams.map((team) => (
								<TeamSection key={team.id} team={team} />
							))}
						</div>
					</div>
				</section>

				<div className="mt-12 mb-12">
					<section className="">
						<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
							<h2 className="text-2xl font-semibold sm:text-4xl text-center">
								Frequently Asked Questions
							</h2>
							<p className="mt-4 mb-8 text-gray-400 text-center font-work">
								Get quick answers to common questions in our FAQ
								section. From our review process to how to stay
								updated, find all you need to know here.
							</p>

							<div className="space-y-4">
								{faqs.map((faq) => (
									<Faq key={faq.id} fq={faq} />
								))}
							</div>
						</div>
					</section>
				</div>

				<div className="pt-7">
					<h1 className="text-5xl font-extrabold text-center mt-3 sm:mt-6 lg:mt-12 ">
						Our Feedbacks
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
						{feedbacks.map((feedback) => (
							<Feedback key={feedback.id} feedback={feedback} />
						))}
					</div>
				</div>

				<div className="mt-20">
					<h1 className="text-5xl font-extrabold text-center mt-3 sm:mt-6 lg:mt-12">
						Contact us
					</h1>
					<GetInTouch />
				</div>
			</div>
		</>
	);
}

export default AboutUs;
