import React from "react";

function Hero() {
	return (
		<div className="container text-light-emphasis display-inline">
			<div className="row text-center border-bottom pb-3 pt-3">
				<h1 className="fs-1 fw-semibold pt-5 text-light-emphasis">Pricing</h1>
				<p className="fs-5 fw-medium text-light-emphasis pb-4">
					Free equity investments and flat &#8377;20 traday and F&O trades
				</p>
			</div>
			<div className="row pt-5 mt-5 pb-5 mb-5align-items-end">
				<div
					className="col text-center"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<img style={{ height: "250px" }} src="media\pricing0.svg" />
					<h2 className="fw-semibold">Free equity delivery</h2>
					<p style={{ width: "370px" }} className="text-muted">
						{" "}
						All equity delivery investments (NSE, BSE), are absolutely free —
						&#8377;0 brokerage.
					</p>
				</div>
				<div
					className="col text-center"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<img style={{ height: "250px" }} src="media\intradayTrades.svg" />
					<h2 className="fw-semibold">Intraday and F&O trades </h2>
					<p style={{ width: "370px" }} className="text-muted">
						Flat Rs.20 or 0.03% (whichever is lower) per executed order on
						intraday trades across equity, currency, and commodity trades.
					</p>
				</div>
				<div
					className="col text-center"
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<img style={{ height: "250px" }} src="media\pricing0.svg" />
					<h2 className="fw-semibold">Free direct MF</h2>
					<p style={{ width: "370px" }} className="text-muted">
						{" "}
						All direct mutual fund investments are absolutely free — &#8377;0
						commissions and DP Cbarges.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
