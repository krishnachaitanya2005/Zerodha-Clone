import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	const [selectedMenu, setSelectedMenu] = useState(0);
	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

	const handleMenuClick = (index) => {
		setSelectedMenu(index);
	};

	const handleProfileClick = (index) => {
		setIsProfileDropdownOpen(!isProfileDropdownOpen);
	};

	//added this code
	const Logout = () => {
		removeCookie("token");
		window.location.href = "https://zerodha-clone-virid.vercel.app/";
	};

	const menuClass = "menu";
	const activeMenuClass = "menu selected";
	return (
		<div className="menu-container">
			<img src="media\logo.png" style={{ width: "50px" }} />
			<div className="menus">
				<ul>
					<li>
						<Link
							style={{ textDecoration: "none" }}
							to="/"
							onClick={() => handleMenuClick(0)}
						>
							<p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
								Dashboard
							</p>
						</Link>
					</li>
					<li>
						<Link
							style={{ textDecoration: "none" }}
							to="/orders"
							onClick={() => handleMenuClick(1)}
						>
							<p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
								Orders
							</p>
						</Link>{" "}
					</li>
					<li>
						<Link
							style={{ textDecoration: "none" }}
							to="/holdings"
							onClick={() => handleMenuClick(2)}
						>
							<p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
								Holdings
							</p>
						</Link>{" "}
					</li>
					<li>
						<Link
							style={{ textDecoration: "none" }}
							to="/positions"
							onClick={() => handleMenuClick(3)}
						>
							<p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
								Positions
							</p>
						</Link>{" "}
					</li>
					<li>
						<Link
							style={{ textDecoration: "none" }}
							to="/funds"
							onClick={() => handleMenuClick(4)}
						>
							<p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
								Funds
							</p>
						</Link>{" "}
					</li>
					<li>
						<Link
							style={{ textDecoration: "none" }}
							to="/apps"
							onClick={() => handleMenuClick(5)}
						>
							<p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
								Apps
							</p>
						</Link>{" "}
					</li>
					{/* added this lines */}
					<li>
						<Link
							to=""
							onClick={() => {
								handleMenuClick(6);
								Logout();
							}}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
								Logout
							</p>
						</Link>
					</li>
				</ul>
				<hr />
				<div className="profile" onClick={() => handleProfileClick}>
					<div className="avatar">ZU</div>
					<p className="username">USERID</p>
					{isProfileDropdownOpen}
				</div>
			</div>
		</div>
	);
};

export default Menu;
