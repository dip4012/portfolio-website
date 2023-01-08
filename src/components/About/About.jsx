import React from "react"
import "./About.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About__picture" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1 year</small>
						</article>

						<article className="about__card">
							<FiUser className="about__icon" />
							<h5>Internships</h5>
							<small>4 Completed</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>6 Completed</small>
						</article>
					</div>

					<p>
						I'm trying to become a website developer. I have solid practical
						experience working on various project kinds. I've worked with HTML, CSS,
						JavaScript, Angular, React, Node.js, Express.js, PHP, Slim, MongoDB, and
						MySQL. I also have some practical knowledge with Django, Go, and Nest.js.
						Additionally, I've used AWS EC2 and AWS Amplify. Using C++ as my primary
						language, I have also developed a decent understanding of DSA. I also have
						a fundamental understanding of Python and Java. All told, I have figured
						out more than 500 problems on different coding platforms and still
						improving. I am constantly looking for chances to pick up new talents and
						learn new technology.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
