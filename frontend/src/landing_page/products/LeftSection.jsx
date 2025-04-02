import React from "react";

function LeftSection({ imageUrl, title, description }) {
	return (
		<div className="row text-light-emphasis py-5">
			<div className="col">
				<img
					style={{ marginLeft: "300px", paddingTop: "10px" }}
					src={imageUrl}
				/>
			</div>
			<div
				className="col fw-medium text-start "
				style={{ paddingLeft: "100px", paddingTop: "50px" }}
			>
				<h2 className="fw-semibold">{title}</h2>
				<p style={{ width: "350px" }} className="lh-lg">
					{description}
				</p>
				<p>
					<a
						style={{
							textDecoration: "none",
							color: "#007bff",
							paddingRight: "50px",
						}}
						href=""
					>
						Try demo <i className="fa-solid fa-arrow-right-long"></i>
					</a>
					<a style={{ textDecoration: "none", color: "#007bff" }} href="">
						Learn more <i className="fa-solid fa-arrow-right-long"></i>
					</a>
				</p>
				<img
					style={{ height: "40px", paddingRight: "20px" }}
					src="media\googlePlayBadge.svg"
				/>
				<img src="media\appstoreBadge.svg" />
			</div>
		</div>
	);
}

export default LeftSection;
