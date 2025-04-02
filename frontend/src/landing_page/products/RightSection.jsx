import React from "react";

function RightSection({ imageUrl, title, description }) {
	return (
		<div className="row text-light-emphasis py-5">
			<div
				className="col fw-medium text-start align-self-center"
				style={{ marginLeft: "300px", paddingTop: "50px" }}
			>
				<h2 className="fw-semibold">{title}</h2>
				<p style={{ width: "350px" }} className="lh-lg">
					{description}
				</p>
				<p>
					<a style={{ textDecoration: "none", color: "#007bff" }} href="">
						Learn more <i className="fa-solid fa-arrow-right-long"></i>
					</a>
				</p>
			</div>
			<div className="col">
				<img
					style={{ paddingRight: "150px", paddingTop: "50px" }}
					src={imageUrl}
				/>
			</div>
		</div>
	);
}

export default RightSection;
