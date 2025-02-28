import React from "react";
import Hero from "./Hero";
import NavBar from "../NavBar";
import Footer from "../Footer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
	return (
		<div>
			<NavBar />
			<Hero />
			<LeftSection />
			<RightSection />
			<Universe />
			<Footer />
		</div>
	);
}

export default ProductsPage;
