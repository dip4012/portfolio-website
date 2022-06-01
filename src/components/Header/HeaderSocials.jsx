import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://linkedin.com/in/dibyendu-saha-323517191"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a href="https://github.com/dip4012" target="_blank" rel="noreferrer">
				<FaGithub />
			</a>
			<a
				href="https://www.facebook.com/dip4012"
				target="_blank"
				rel="noreferrer"
			>
				<ImFacebook2 />
			</a>
		</div>
	);
};

export default HeaderSocials;
