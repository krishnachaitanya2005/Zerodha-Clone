import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { CookiesProvider } from "react-cookie";

import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CookiesProvider>
			{" "}
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</CookiesProvider>
	</React.StrictMode>
);
