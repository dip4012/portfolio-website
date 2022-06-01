import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Amazon E-Commerce Clone",
		github: "https://github.com/dip4012/amazon-ecommerce-clone.git",
		demo: "https://clone-edac6.web.app",
	},
	{
		id: 1,
		image: IMG2,
		title: "Portfolio Website",
		github: "https://github.com/dip4012/portfolio-website.git",
		demo: "https://dibyendu.netlify.app/",
	},
	{
		id: 1,
		image: IMG3,
		title: "URL Shortener",
		github: "https://github.com/dip4012/URL-Shortener.git",
		demo: "https://url-shortener-0412.herokuapp.com/",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Web Development Works</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map((item) => (
					<article className="portfolio__item" key={item.id}>
						<div className="portfolio__itemImage">
							<img src={item.image} alt="" />
						</div>
						<h3>{item.title}</h3>
						<div className="portfolio__itemCta">
							<a
								href={item.github}
								target="_blank"
								className="btn"
								rel="noreferrer"
							>
								GitHub
							</a>
							<a
								href={item.demo}
								target="_blank"
								className="btn btn-primary"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
