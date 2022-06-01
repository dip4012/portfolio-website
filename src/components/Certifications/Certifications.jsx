import React from "react";
import "./Certifications.css";
import { TbCertificate2 } from "react-icons/tb";

const Testimonials = () => {
	return (
		<section id="certifications">
			<h5>Details of Online Courses</h5>
			<h2>Certifications</h2>

			<div className="container certifications__container">
				<article className="certificate">
					<TbCertificate2 className="certificate__icon" />
					<h3>Basic Web Development Using HTML And CSS</h3>
					<small>OpenClassroms</small>

					<a
						href="https://drive.google.com/file/d/1Krj53JJZ_iM4hyzrQnBYt9vnptFJQOZ_/view"
						className="btn"
					>
						View
					</a>
				</article>

				<article className="certificate">
					<TbCertificate2 className="certificate__icon" />
					<h3>Basic Web Development Using HTML And CSS</h3>
					<small>OpenClassroms</small>

					<a
						href="https://drive.google.com/file/d/1Krj53JJZ_iM4hyzrQnBYt9vnptFJQOZ_/view"
						className="btn"
					>
						View
					</a>
				</article>

				<article className="certificate">
					<TbCertificate2 className="certificate__icon" />
					<h3>Basic Web Development Using HTML And CSS</h3>
					<small>OpenClassroms</small>

					<a
						href="https://drive.google.com/file/d/1Krj53JJZ_iM4hyzrQnBYt9vnptFJQOZ_/view"
						className="btn"
					>
						View
					</a>
				</article>
			</div>
		</section>
	);
};

export default Testimonials;
