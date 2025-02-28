import React from "react";
import "./NavBar.css";

function NavBar() {
	return (
		<div className="container mw-100 m-0 p-0 sticky-top bg-white">
			<nav className="navbar navbar-expand-lg border-bottom px-5">
				<div className="container-fluid ms-5 ps-5 p-1 navbar">
					<a className="navbar-brand" href="#">
						<img className="w-25 h-25" src="media\logo.svg" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end me-5 pe-5"
						id="navbarNav"
					>
						<ul className="navbar-nav column-gap-4">
							<li className="nav-item">
								<a className="nav-link route" href="#">
									Signup
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link route" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link route" href="#">
									Products
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link route" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link route" href="#">
									Support
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i class="fa-solid fa-bars fs-5"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
