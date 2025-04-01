import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
		username: "",
	});
	const { email, password, username } = inputValue;
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const handleError = (err) =>
		toast.error(err, {
			position: "bottom-left",
		});
	const handleSuccess = (msg) =>
		toast.success(msg, {
			position: "bottom-right",
		});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"http://localhost:8080/signup",
				{
					...inputValue,
				},
				{ withCredentials: true }
			);
			const { success, message } = data;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {
					window.location.href = "http://localhost:5174/";
				}, 1000);
			} else {
				handleError(message);
			}
		} catch (error) {
			console.log(error);
		}
		setInputValue({
			...inputValue,
			email: "",
			password: "",
			username: "",
		});
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				backgroundColor: "#f5f5f5",
			}}
		>
			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
					width: "350px",
					textAlign: "center",
				}}
			>
				<h2 style={{ color: "#333", marginBottom: "20px" }}>Signup Account</h2>
				<form onSubmit={handleSubmit}>
					<div style={{ marginBottom: "15px" }}>
						<label
							htmlFor="email"
							style={{
								display: "block",
								textAlign: "left",
								marginBottom: "5px",
								color: "#555",
							}}
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={handleOnChange}
							style={{
								width: "100%",
								padding: "10px",
								borderRadius: "5px",
								border: "1px solid #ccc",
								outline: "none",
							}}
						/>
					</div>
					<div style={{ marginBottom: "15px" }}>
						<label
							htmlFor="username"
							style={{
								display: "block",
								textAlign: "left",
								marginBottom: "5px",
								color: "#555",
							}}
						>
							Username
						</label>
						<input
							type="text"
							name="username"
							value={username}
							placeholder="Enter your username"
							onChange={handleOnChange}
							style={{
								width: "100%",
								padding: "10px",
								borderRadius: "5px",
								border: "1px solid #ccc",
								outline: "none",
							}}
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<label
							htmlFor="password"
							style={{
								display: "block",
								textAlign: "left",
								marginBottom: "5px",
								color: "#555",
							}}
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							value={password}
							placeholder="Enter your password"
							onChange={handleOnChange}
							style={{
								width: "100%",
								padding: "10px",
								borderRadius: "5px",
								border: "1px solid #ccc",
								outline: "none",
							}}
						/>
					</div>
					<button
						type="submit"
						style={{
							width: "100%",
							backgroundColor: "#387ed1",
							color: "white",
							padding: "10px",
							borderRadius: "5px",
							border: "none",
							cursor: "pointer",
						}}
					>
						Submit
					</button>
					<p style={{ marginTop: "10px", color: "#555" }}>
						Already have an account?{" "}
						<Link
							to="/login"
							style={{ color: "#387ed1", textDecoration: "none" }}
						>
							Login
						</Link>
					</p>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
};

export default Signup;
