import React from "react";

function OpenAccount() {
	return (
		<div className="container text-center">
			<h1 className="fs-2 fw-semibold pt-5 text-light-emphasis">
				Open a Zerodha account
			</h1>
			<p className="fs-5 fw-normal text-light-emphasis pt-4">
				Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
				trades.
			</p>
			<button
				type="button"
				className="btn btn-primary btn-lg rounded-1 px-4 signup-btn mt-4"
			>
				Sign up for free
			</button>
		</div>
	);
}

export default OpenAccount;
