import React from "react";

function Awards() {
	return (
		<div className="container my-5 py-5">
			<div className="float-start h-75 w-50 ">
				<img src="media\images\largestBroker.svg" />
			</div>
			<div>
				<h1 className="fw-semibold">Largest stock broker in India</h1>
				<p className="fs-5">
					2+ million Zerodha clients contribute to over 15% of all retail order
					volumes in India daily by trading and investing in:
				</p>
				<div className="d-flex mt-5 gap-5 fs-5">
					<ul>
						<li className="pb-3">Futures and Options</li>
						<li className="pb-3">Commodity derivatives</li>
						<li className="pb-3">Currency derivatives</li>
					</ul>
					<ul>
						<li className="pb-3">Stocks & IPOs</li>
						<li className="pb-3">Direct mutual funds</li>
						<li className="pb-3">Bonds and Govt. Securities</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Awards;
