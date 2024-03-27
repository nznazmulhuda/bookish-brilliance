import PropTypes from "prop-types";

function Faq({ fq }) {
	const { question, answer } = fq;

	return (
		<>
			
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-default-400 cursor-pointer font-work">
								{question}
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
								{answer}
							</p>
						</details>
		</>
	);
}

Faq.propTypes = {
	fq: PropTypes.object,
};

export default Faq;
