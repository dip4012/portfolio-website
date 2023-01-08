import React from "react"
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Amazon E-Commerce Clone",
		github: "https://github.com/dip4012/amazon-ecommerce-clone.git",
		demo: "https://clone-edac6.web.app",
	},
	{
		id: 2,
		image: IMG2,
		title: "Portfolio Website",
		github: "https://github.com/dip4012/portfolio-website.git",
		demo: "https://dibyendu.netlify.app/",
	},
	{
		id: 3,
		image: IMG3,
		title: "URL Shortener",
		github: "https://github.com/dip4012/URL-Shortener.git",
		demo: "https://url-shortener-production-00.up.railway.app",
	},
	{
		id: 4,
		image: IMG4,
		title: "Quizzical",
		github: "https://github.com/dip4012/Quizzical.git",
		demo: "https://quizzical-production.up.railway.app",
	},
	{
		id: 5,
		image: IMG5,
		title: "Tenzies Game",
		github: "https://github.com/dip4012/Tenzies-game.git",
		demo: "https://tenzies-game-production.up.railway.app",
	},
	{
		id: 6,
		image: IMG6,
		title: "Comment System",
		github: "https://github.com/dip4012/comment-system-frontend.git",
		demo: "https://main.d2jjdcljtvsa9x.amplifyapp.com/",
	},
]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Web Development Works</h5>
			<h2>Projects</h2>

			<div className="container portfolio__container">
				{data.map((item) => (
					<article className="portfolio__item" key={item.id}>
						<div className="portfolio__itemImage">
							<img src={item.image} alt="" />
						</div>
						<h3>{item.title}</h3>
						<div className="portfolio__itemCta">
							<a href={item.github} target="_blank" className="btn" rel="noreferrer">
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
	)
}

export default Portfolio
