import React from "react";

function Hero() {
	return (
		<div className="container mb-5 pb-5">
			<div className="row text-center mt-5 mb-5 pb-5">
				<h1 className="fs-1 fw-semibold pt-5 text-light-emphasis">
					Zerodha Products
				</h1>
				<p className="fs-5 fw-medium text-light-emphasis">
					Sleek, modern, and intuitive trading platforms
				</p>
				<p className="fs-6 fw-medium text-light-emphasis">
					Check out our{" "}
					<a style={{ textDecoration: "none", color: "#007bff" }} href="">
						investment offerings <i class="fa-solid fa-arrow-right-long"></i>
					</a>
				</p>
			</div>
		</div>
	);
}

export default Hero;
