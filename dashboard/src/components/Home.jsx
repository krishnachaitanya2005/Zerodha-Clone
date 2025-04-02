import { React, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { Button } from "@mui/material";

const Home = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([]);
	const [username, setUsername] = useState("");
	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				window.location.href = "https://zerodha-clone-virid.vercel.app/login";
			}
			const { data } = await axios.post(
				"https://zerodha-clone-kfwu.onrender.com",
				{},
				{ withCredentials: true }
			);
			const { status, user } = data;
			setUsername(user);
			return status
				? toast(`Hello ${user}`, {
						position: "top-right",
				  })
				: (removeCookie("token"),
				  (window.location.href =
						"https://zerodha-clone-virid.vercel.app/login"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);
	const Logout = () => {
		removeCookie("token");
		window.location.href = "https://zerodha-clone-virid.vercel.app/";
	};

	return (
		<>
			<Button variant="outlined" onClick={Logout}>
				Logout
			</Button>
			<TopBar username={username} />
			<Dashboard username={username} />
		</>
	);
};

export default Home;

// return (
// 	<>
// 		<div className="home_page">
// 			<h4>
// 				{" "}
// 				Welcome <span>{username}</span>
// 			</h4>
// 			<button onClick={Logout}>LOGOUT</button>
// 		</div>
// 		<ToastContainer />
// 	</>
// );
