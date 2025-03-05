import React from "react";

function Team() {
	return (
		<div className="container text-light-emphasis pb-5">
			<div className="row p-5  text-center">
				<h2 className="fw-semibold lh-base">People</h2>
			</div>

			<div className="row  mt-3 fs-5 justify-content-left px-5 mx-5 fw-medium lh-base">
				<div className="col-6  align-middle text-center">
					<img
						style={{ width: "300px", height: "300px" }}
						className="rounded-circle"
						src="media\nithinKamath.jpg"
					/>
					<h4 className="fw-semibold pt-4">Nithin Kamath</h4>
					<p>Founder, CEO</p>
				</div>
				<div className="col-6">
					<p>
						Nithin bootstrapped and founded Zerodha in 2010 to overcome the
						hurdles he faced during his decade long stint as a trader. Today,
						Zerodha has changed the landscape of the Indian broking industry.{" "}
					</p>
					<p>
						He is a member of the SEBI Secondary Market Advisory Committee
						(SMAC) and the Market Data Advisory Committee (MDAC).
					</p>
					<p>Playing basketball is his zen.</p> Connect on{" "}
					<a style={{ textDecoration: "none", color: "#387ed7" }} href="">
						Homepage
					</a>{" "}
					/{" "}
					<a style={{ textDecoration: "none", color: "#387ed7" }} href="">
						TradingQnA
					</a>{" "}
					/
					<a style={{ textDecoration: "none", color: "#387ed7" }} href="">
						Twitter
					</a>
				</div>
			</div>
		</div>
	);
}

export default Team;
