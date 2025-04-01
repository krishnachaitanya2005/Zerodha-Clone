import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/support" element={<SupportPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</StrictMode>
);
