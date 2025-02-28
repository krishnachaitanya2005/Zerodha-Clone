import React from "react";
import "./Hero.css";

function Hero() {
	return (
		<div className="container mb-5 pb-3">
			<div className="hero-image d-flex flex-column justify-content-center align-items-center mb-5 pb-5">
				<img className=" h-75 w-75 pt-5 mt-5" src="media/homeHero.png" />
				<h1 className="fs-1 fw-semibold pt-5 text-light-emphasis">
					Invest in everything
				</h1>
				<p className="fs-5 fw-normal text-light-emphasis">
					Online platform to invest in stocks, derivatives, mutual funds, ETFs,
					bonds, and more.
				</p>
				<button
					type="button"
					className="btn btn-primary btn-lg rounded-1 px-4 signup-btn mt-4"
				>
					Sign up for free
				</button>
			</div>
		</div>
	);
}

export default Hero;
