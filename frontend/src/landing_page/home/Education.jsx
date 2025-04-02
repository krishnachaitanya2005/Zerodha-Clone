import React from "react";

function Education() {
	return (
		<div className="container py-5 my-5 mx-5 px-5 text-light-emphasis">
			<div className="row">
				<div className="col w-75 h-75 ps-5">
					<img src="media\education.svg" />
				</div>
				<div className="col">
					<h2 className="pb-4 fw-semibold">Free and open market education</h2>
					<p>
						Varsity, the largest online stock market education book in the world
						covering everything from the basics to advanced trading.
					</p>
					<a style={{ color: "#007bff", textDecoration: "none" }} href="#">
						Varsity <i className="fa-solid fa-arrow-right-long"></i>
					</a>

					<p className="pt-4">
						TradingQ&A, the most active trading and investment community in
						India for all your market related queries.
					</p>
					<a style={{ color: "#007bff", textDecoration: "none" }} href="#">
						TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Education;
