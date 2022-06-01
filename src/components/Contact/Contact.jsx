import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { MdMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_2g21t6x",
				"template_wfxangk",
				form.current,
				"QKfv5LFrUXs2VpV5B"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdMailOutline className="contact__optionIcon" />
						<h4>Email</h4>
						<h5>dip4012@gmail.com</h5>
						<a href="mailto:dip4012@gmail.com" target="_blank">
							Send a message
						</a>
					</article>

					<article className="contact__option">
						<RiMessengerLine className="contact__optionIcon" />
						<h4>Messenger</h4>
						<h5>dip4012</h5>
						<a href="https://m.me/dip4012" target="_blank">
							Send a message
						</a>
					</article>

					<article className="contact__option">
						<BsWhatsapp className="contact__optionIcon" />
						<h4>WhatsApp</h4>
						<a
							href="https://api.whatsapp.com/send?phone=+919330045453"
							target="_blank"
						>
							Send a message
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send a message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
