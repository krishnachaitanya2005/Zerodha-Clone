import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import NavBar from "../NavBar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
	return (
		<div>
			<NavBar />
			<Hero />
			<Awards />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />
			<Footer />
		</div>
	);
}

export default HomePage;
