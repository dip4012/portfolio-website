import React from "react";
import "./Education.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
	return (
		<section id="educations">
			<h5>Here are Details of</h5>
			<h2>My Education</h2>

			<div className="container educations__container">
				<article className="education">
					<div className="education__head">
						<h3>Kalyani Government Engineering College</h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>Bachelor of Technology
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Computer Science and Engineering
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>04/2019
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>Present
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>CGPA : </strong>9.54
							</p>
						</li>
					</ul>
				</article>

				<article className="education">
					<div className="education__head">
						<h3>Kalyani Public School</h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>Higher Secondary Education
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Science (PCM)
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>05/2017
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>04/2019
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Percentage : </strong>93.6
							</p>
						</li>
					</ul>
				</article>

				<article className="education">
					<div className="education__head">
						<h3>St. Augustine's Day School</h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>Secondary Education
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Science
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>04/2013
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>03/2017
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Percentage : </strong>93.4
							</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
