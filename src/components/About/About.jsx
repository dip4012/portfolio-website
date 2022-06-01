import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
							<small>6 months</small>
						</article>

						<article className="about__card">
							<FiUser className="about__icon" />
							<h5>Intrenships</h5>
							<small>2 Completed</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>3 Completed</small>
						</article>
					</div>

					<p>
						I am a proficient web developer having experience in HTML, CSS,
						JavaScript, TypeScript, MERN and MEAN stack. I am also a budding
						software developer. I also have an interest in DevOps. I have worked
						with tools like git, npm, and docker. I have worked on Windows and
						Linux. I also have a very basic knowledge of bash scripting. I am a
						keen learner passionate about modern technology and eager to build a
						career in software development. I have solved more than 500 problems
						on various coding platforms like CodeChef, Leetcode, etc. I have
						always believed in the principle of "Learn as you go!!"
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
