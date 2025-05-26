import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
	axios.defaults.withCredentials = true;

	const location = useLocation();
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tokenFromUrl = urlParams.get("token");
		const userFromUrl = urlParams.get("user");
	
		if (tokenFromUrl) {
		
			setCookie("token", tokenFromUrl, {
				path: "/",
				maxAge: 24 * 60 * 60, 
				sameSite: "lax",
				httpOnly: false,
				secure: false,
			});
			setUsername(userFromUrl);
		} else {
			
		}
	}, []); 

	useEffect(() => {
		const verifyAndSetup = async () => {
			if (!cookies.token) {
				return;
			}

			try {
				const { data } = await axios.post(
					"https://zerodha-clone-kfwu.onrender.com",
					{},
					{ withCredentials: true }
				);

				if (!data || data.status !== true) {
			
					return;
				}

				setUsername(data.user);
				if (!username) {
					toast(`Hello ${data.user}`, {
						position: "top-right",
					});
				}
				setIsLoading(false);
			} catch (error) {
				console.error("Error during verification:", error);
				removeCookie("token");
				window.location.href = "https://zerodha-clone-virid.vercel.app/login";
			}
		};

		verifyAndSetup();
	}, [cookies.token]);

	

	return (
		<>
			<TopBar username={username} />
			<Dashboard username={username} />
			<ToastContainer />
		</>
	);
};

export default Home;