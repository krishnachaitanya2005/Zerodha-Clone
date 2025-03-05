import React from "react";

function Hero() {
	return (
		<div className="container text-light-emphasis">
			<div className="row p-5 mt-5 text-center">
				<h2 className="fw-semibold lh-base">
					We pioneered the discount broking model in India. <br /> Now, we are
					breaking ground with our technology.
				</h2>
			</div>

			<div className="row p-5 mt-5 fs-5 border-top justify-content-left px-5 mx-5 fw-medium lh-base">
				<div className="col-6 ">
					<p>
						We kick-started operations on the 15th of August, 2010 with the goal
						of breaking all barriers that traders and investors face in India in
						terms of cost, support, and technology. We named the company
						Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
						barrier.
					</p>
					<p>
						Today, our disruptive pricing models and in-house technology have
						made us the biggest stock broker in India.
					</p>
					<p>
						Over 1+ Crore clients place millions of orders every day through our
						powerful ecosystem of investment platforms, contributing over 15% of
						all Indian retail trading volumes.
					</p>
				</div>
				<div className="col-6">
					<p>
						In addition, we run a number of popular open online educational and
						community initiatives to empower retail traders and investors.
					</p>
					<p>
						<a style={{ textDecoration: "none", color: "#387ed7" }} href="">
							Rainmatter
						</a>
						, our fintech fund and incubator, has invested in several fintech
						startups with the goal of growing the Indian capital markets.
					</p>
					<p>
						And yet, we are always up to something new every day. Catch up on
						the latest updates on our{" "}
						<a style={{ textDecoration: "none", color: "#387ed7" }} href="">
							blog
						</a>{" "}
						or see what the media is{" "}
						<a style={{ textDecoration: "none", color: "#387ed7" }} href="">
							saying about us
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
