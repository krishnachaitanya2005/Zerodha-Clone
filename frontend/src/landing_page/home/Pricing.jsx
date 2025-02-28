import React from "react";

function Pricing() {
	return (
		<div className="container py-5 my-5 text-light-emphasis">
			<div className="row">
				<div className="col-4">
					<h2 className="pb-4 fw-semibold">Unbeatable pricing</h2>
					<p className="pb-2">
						We pioneered the concept of discount broking and price transparency
						in India. Flat fees and no hidden charges.
					</p>
					<a style={{ color: "#007bff", textDecoration: "none" }} href="#">
						See pricing <i class="fa-solid fa-arrow-right-long"></i>
					</a>
				</div>
				<div className="col-2"></div>
				<div className="col-6">
					<div className="row text-center">
						<div className="col border p-4">
							<h1 className="pb-3 fw-semibold">&#8377; 0</h1>
							<p>
								Free equity delivery and <br />
								direct mutual funds
							</p>
						</div>
						<div className="col border p-4">
							<h1 className="pb-3 fw-semibold">&#8377; 20</h1>
							<p>Intraday and F&O</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
