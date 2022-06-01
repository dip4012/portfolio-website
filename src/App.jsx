import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Education />
			<Portfolio />
			<Certifications />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
