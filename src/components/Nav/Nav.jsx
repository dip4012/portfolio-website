import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import { TbCertificate } from "react-icons/tb";

const Nav = () => {
	const [active, setActive] = useState("#");

	return (
		<nav>
			<a
				href="#home"
				className={active === "#home" ? "active" : ""}
				onClick={() => setActive("#home")}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				className={active === "#about" ? "active" : ""}
				onClick={() => setActive("#about")}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				className={active === "#experience" ? "active" : ""}
				onClick={() => setActive("#experience")}
			>
				<BiBook />
			</a>
			<a
				href="#educations"
				className={active === "#educations" ? "active" : ""}
				onClick={() => setActive("#educations")}
			>
				<TbSchool />
			</a>
			<a
				href="#portfolio"
				className={active === "#portfolio" ? "active" : ""}
				onClick={() => setActive("#portfolio")}
			>
				<VscFileSubmodule />
			</a>
			<a
				href="#certifications"
				className={active === "#certifications" ? "active" : ""}
				onClick={() => setActive("#certifications")}
			>
				<TbCertificate />
			</a>
			<a
				href="#contact"
				className={active === "#contact" ? "active" : ""}
				onClick={() => setActive("#contact")}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Nav;
