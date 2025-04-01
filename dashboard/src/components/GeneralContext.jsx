import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // Import the SellActionWindow

const GeneralContext = React.createContext({
	openBuyWindow: (uid) => {},
	closeBuyWindow: () => {},
	openSellWindow: (uid) => {}, // New method for selling
	closeSellWindow: () => {}, // New method for closing sell window
});

export const GeneralContextProvider = (props) => {
	const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
	const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // State for sell window
	const [selectedStockUID, setSelectedStockUID] = useState("");

	const handleOpenBuyWindow = (uid) => {
		setIsBuyWindowOpen(true);
		setSelectedStockUID(uid);
	};

	const handleCloseBuyWindow = () => {
		setIsBuyWindowOpen(false);
		setSelectedStockUID("");
	};

	const handleOpenSellWindow = (uid) => {
		// New method for opening sell window
		setIsSellWindowOpen(true);
		setSelectedStockUID(uid);
	};

	const handleCloseSellWindow = () => {
		// New method for closing sell window
		setIsSellWindowOpen(false);
		setSelectedStockUID("");
	};

	return (
		<GeneralContext.Provider
			value={{
				openBuyWindow: handleOpenBuyWindow,
				closeBuyWindow: handleCloseBuyWindow,
				openSellWindow: handleOpenSellWindow, // Exposing the new function to open sell window
				closeSellWindow: handleCloseSellWindow, // Exposing the new function to close sell window
			}}
		>
			{props.children}
			{isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
			{isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}{" "}
			{/* Render SellActionWindow when open */}
		</GeneralContext.Provider>
	);
};

export default GeneralContext;
