import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import NavBar from "../NavBar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function PricingPage() {
	return (
		<div>
			<NavBar />
			<Hero />
			<OpenAccount />
			<Brokerage />
			<Footer />
		</div>
	);
}

export default PricingPage;
