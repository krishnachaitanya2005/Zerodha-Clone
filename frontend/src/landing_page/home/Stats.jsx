import React from "react";

function Stats() {
	return (
		<div className="container">
			<div className="d-flex mt-5 pt-5">
				<div className="d-flex flex-column ms-5 ps-5 text-light-emphasis row-gap-4 me-2 w-50">
					<h1 className="fs-2 fw-semibold mb-4">Trust with confidence</h1>
					<div>
						<h2 className="fs-5 fw-semibold">Customer-first always</h2>
						<p>
							That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
							crores of equity investments and contribute to 15% of daily retail
							exchange volumes in India.
						</p>
					</div>
					<div>
						<h2 className="fs-5 fw-semibold">No spam or gimmicks</h2>
						<p>
							No gimmicks, spam, "gamification", or annoying push notifications.
							High quality apps that you use at your pace, the way you like.
						</p>
					</div>
					<div>
						<h2 className="fs-5 fw-semibold">The Zerodha universes</h2>
						<p>
							Not just an app, but a whole ecosystem. Our investments in 30+
							fintech startups offer you tailored services specific to your
							needs. .
						</p>
					</div>
					<div>
						<h2 className="fs-5 fw-semibold">Do better with money</h2>
						<p>
							With initiatives like Nudge and Kill Switch, we don't just
							facilitate transactions, but actively help you do better with your
							money.
						</p>
					</div>
				</div>
				<div className="d-flex flex-column ps-5 ">
					<img
						className="float-end pe-5 me-5"
						src="media\ecosystem.png"
						style={{ width: "90%" }}
					/>
					<div className="d-flex gap-5 mt-4 justify-content-center link-primary">
						<a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
							Explore our products <i class="fa-solid fa-arrow-right-long"></i>
						</a>
						<a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
							Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
						</a>
					</div>
				</div>
			</div>
			<center className="mt-5">
				<img src="media\pressLogos.png" />
			</center>
		</div>
	);
}

export default Stats;
