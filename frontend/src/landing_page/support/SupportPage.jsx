import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import NavBar from "../home/NavBar";
import Footer from "../home/Footer";

function SupportPage() {
	return (
		<div>
			<NavBar />
			<Hero />
			<CreateTicket />
			<Footer />
		</div>
	);
}

export default SupportPage;
