import React from "react";

function Brokerage() {
	return (
		<div className="container pt-5 mt-4 border-top">
			<div className="row pt-3">
				<div className="col-8">
					<h5 className="text-center pb-4">
						<a style={{ color: "#007bff", textDecoration: "none" }} href="">
							Brokerage calculator
						</a>
					</h5>
					<ul className="px-3 mx-3 text-muted lh-lg">
						<li>
							Call & Trade and RMS auto-squareoff: Additional charges of 250 +
							GST per order.
						</li>
						<li>Digital contract notes will be sent via e-mail.</li>
						<li>
							{" "}
							Physical copies of contract notes, if required, shall be charged ?
							20 per contract note. Courier charges apply.
						</li>
						<li>
							For NRI account (non-PIS), 0.5% or ? 100 per executed order for
							equity (whichever is lower).
						</li>
						<li>
							{" "}
							For NRI account (PIS), 0.5% or 2200 per executed order for equity
							(whichever is lower).
						</li>
						<li>
							If the account is in debit balance, any order placed will be
							charged 240 per executed order instead of ? 20 per executed order.
						</li>
					</ul>
				</div>
				<div className="col-4">
					<h5>
						<a style={{ color: "#007bff", textDecoration: "none" }} href="">
							List of charges
						</a>
					</h5>
				</div>
			</div>
		</div>
	);
}

export default Brokerage;
