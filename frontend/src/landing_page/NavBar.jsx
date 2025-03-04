import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<div className="container mw-100 m-0 p-0 sticky-top bg-white">
			<nav className="navbar navbar-expand-lg border-bottom px-5">
				<div className="container-fluid ms-5 ps-5 p-1 navbar">
					<Link className="navbar-brand" to="/">
						<img className="w-25 h-25" src="media\logo.svg" />
					</Link>
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
								<Link className="nav-link route" to="/signup">
									Signup
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link route" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link route" to="/products">
									Products
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link route" to="/pricing">
									Pricing
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link route" to="/support">
									Support
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									<i class="fa-solid fa-bars fs-5"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
