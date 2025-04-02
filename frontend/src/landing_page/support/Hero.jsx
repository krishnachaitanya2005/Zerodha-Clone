import React from "react";

function Hero() {
	return (
		<div
			style={{ backgroundColor: "#387ed1", paddingLeft: "100px" }}
			className="text-white fw-medium mx-0 pb-5"
		>
			<div className="row px-5 mx-5 pt-5 pb-5">
				<div className="col-7">
					<p className="fs-4 pb-3 fw-semibold">Support Portal</p>{" "}
					<p className="fs-3">
						Search for an answer or browse help topics to create a ticket
					</p>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2 rounded-0"
							type="search"
							placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
							aria-label="Search"
							style={{ height: "50px", width: "600px" }}
						></input>
						{/* <button className="btn btn-outline-success" type="submit">
							Search
						</button> */}
					</form>
					<div className="pt-3">
						<a href="" style={{ color: "white", paddingRight: "25px" }}>
							Track account opening
						</a>
						<a href="" style={{ color: "white", paddingRight: "25px" }}>
							Track segment activation
						</a>
						<a href="" style={{ color: "white", paddingRight: "25px" }}>
							Intraday margins
						</a>
						<br />
						<a href="" style={{ color: "white", paddingRight: "25px" }}>
							Kite user manual
						</a>
					</div>
				</div>
				<div className="col-4">
					<p className="text-end pb-5 mb-5">
						<a href="" style={{ color: "white" }}>
							Track tickets{" "}
						</a>
					</p>
					<p className="fs-5 fw-semibold">Featured</p>
					<ol>
						<li className=" pb-3">
							<a href="" style={{ color: "white" }}>
								Issue with order placement on Kite [Resolved]
							</a>
						</li>
						<li>
							<a href="" style={{ color: "white" }}>
								Surveillance measure on scrips - March 2025
							</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default Hero;
