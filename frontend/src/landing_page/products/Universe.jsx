import React from "react";

function Universe() {
	return (
		<div className="container pt-5 mt-5 pb-4">
			<div className="row text-light-emphasis fw-medium text-center">
				<h2 className="fw-semibold">The Zerodha Universe</h2>
				<p className="text-center fs-6 pt-3">
					Extend your trading and investment experience even further with our
					partner platforms
				</p>
				<div
					className="testimonials  col-4"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<img
						style={{ height: "50px", width: "200px" }}
						src="media\zerodhaFundhouse.png"
					/>
					<p
						className="text-muted"
						style={{ paddingTop: "12px", fontSize: "13px", width: "200px" }}
					>
						Our asset management venture that is creating simple and transparent
						index funds to help you save for your goals.
					</p>
					<img
						style={{ height: "50px", width: "150px" }}
						src="media\streakLogo.png"
					/>
					<p
						className="text-muted"
						style={{ paddingTop: "12px", fontSize: "13px", width: "200px" }}
					>
						Systematic trading platform that allows you to create and backtest
						strategies without coding.
					</p>
				</div>
				<div
					className="testimonials  col-4  p-3"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<img
						style={{ height: "60px", width: "200px" }}
						src="media\sensibullLogo.svg"
					/>
					<p
						className="text-muted"
						style={{ paddingTop: "12px", fontSize: "13px", width: "200px" }}
					>
						Options trading platform that lets you create strategies, analyze
						positions, and examine data points like open interest, FII/DII, and
						more.
					</p>
					<img
						style={{ height: "50px", width: "200px" }}
						src="media\smallcaseLogo.png"
					/>
					<p
						className="text-muted"
						style={{ paddingTop: "12px", fontSize: "13px", width: "200px" }}
					>
						Thematic investing platform that helps you invest in diversified
						baskets of stocks on ETFs.
					</p>
				</div>
				<div
					className="testimonials  col-4  p-3"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<img
						style={{ height: "50px", width: "200px" }}
						src="media\goldenpiLogo.png"
					/>
					<p
						className="text-muted"
						style={{ paddingTop: "12px", fontSize: "13px", width: "200px" }}
					>
						Investment research platform that offers detailed insights on
						stocks, sectors, supply chains, and more.
					</p>
					<img
						style={{ height: "50px", width: "170px" }}
						src="media\dittoLogo.png"
					/>
					<p
						className="text-muted"
						style={{ paddingTop: "12px", fontSize: "13px", width: "200px" }}
					>
						Personalized advice on life and health insurance. No spam and no
						mis-selling.
					</p>
				</div>
			</div>
			<div className="text-center">
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

export default Universe;
