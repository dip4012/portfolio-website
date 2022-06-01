import React from "react";
import "./Certifications.css";
import { TbCertificate2 } from "react-icons/tb";

const data = [
	{
		id: 1,
		title: "Basic Web Development Using HTML And CSS",
		provider: "OpenClassrooms",
		link: "https://drive.google.com/file/d/1Krj53JJZ_iM4hyzrQnBYt9vnptFJQOZ_/view",
	},
	{
		id: 1,
		title: "Introducing to Programming using JavaScript",
		provider: "Microsoft",
		link: "https://drive.google.com/file/d/1HQauDtqLsI_EM5fx3AGteNDqjr_Ij9VL/view?usp=sharing",
	},
	{
		id: 1,
		title: "Web Development",
		provider: "Foxmula",
		link: "https://drive.google.com/file/d/1MXkVeh-0EYv7g2RUISOJ4aA1PWuWBJgn/view?usp=sharing",
	},
];

const Testimonials = () => {
	return (
		<section id="certifications">
			<h5>Details of Online Courses</h5>
			<h2>Certifications</h2>

			<div className="container certifications__container">
				{data.map(({ id, title, provider, link }) => (
					<article className="certificate">
						<TbCertificate2 className="certificate__icon" />
						<h3>{title}</h3>
						<small>{provider}</small>

						<a href={link} className="btn" target="_blank" rel="noreferrer">
							View
						</a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
