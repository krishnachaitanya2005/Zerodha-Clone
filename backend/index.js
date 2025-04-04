require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

const allowedOrigins = [
	"https://zerodha-clone-virid.vercel.app",
	"https://zerodha-clone-jcg8.vercel.app",
];

app.use(
	cors({
		origin: allowedOrigins,
		methods: "GET,POST,PUT,DELETE,OPTIONS",
		allowedHeaders: "Content-Type,Authorization",
		credentials: true, // <-- This is required to allow credentials (cookies, auth headers)
	})
);

// Allow preflight requests for all routes (must be before routes)
app.options("*", (req, res) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.header("Access-Control-Allow-Credentials", "true");
	return res.sendStatus(200); // Ensure a proper response instead of 204
});
//  Log incoming request origins (for debugging)
app.use((req, res, next) => {
	console.log("Request Origin:", req.headers.origin);
	next();
});

// app.use(cors());
// app.use(
// 	cors({
// 		origin: "http://localhost:5173", // Allow only your frontend domain
// 		credentials: true, // Allow credentials (cookies, headers)
// 	})
// );

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

// app.get("/addHoldings", async (req, res) => {
// 	let tempHoldings = [
// 		{
// 			name: "BHARTIARTL",
// 			qty: 2,
// 			avg: 538.05,
// 			price: 541.15,
// 			net: "+0.58%",
// 			day: "+2.99%",
// 		},
// 		{
// 			name: "HDFCBANK",
// 			qty: 2,
// 			avg: 1383.4,
// 			price: 1522.35,
// 			net: "+10.04%",
// 			day: "+0.11%",
// 		},
// 		{
// 			name: "HINDUNILVR",
// 			qty: 1,
// 			avg: 2335.85,
// 			price: 2417.4,
// 			net: "+3.49%",
// 			day: "+0.21%",
// 		},
// 		{
// 			name: "INFY",
// 			qty: 1,
// 			avg: 1350.5,
// 			price: 1555.45,
// 			net: "+15.18%",
// 			day: "-1.60%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "ITC",
// 			qty: 5,
// 			avg: 202.0,
// 			price: 207.9,
// 			net: "+2.92%",
// 			day: "+0.80%",
// 		},
// 		{
// 			name: "KPITTECH",
// 			qty: 5,
// 			avg: 250.3,
// 			price: 266.45,
// 			net: "+6.45%",
// 			day: "+3.54%",
// 		},
// 		{
// 			name: "M&M",
// 			qty: 2,
// 			avg: 809.9,
// 			price: 779.8,
// 			net: "-3.72%",
// 			day: "-0.01%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "RELIANCE",
// 			qty: 1,
// 			avg: 2193.7,
// 			price: 2112.4,
// 			net: "-3.71%",
// 			day: "+1.44%",
// 		},
// 		{
// 			name: "SBIN",
// 			qty: 4,
// 			avg: 324.35,
// 			price: 430.2,
// 			net: "+32.63%",
// 			day: "-0.34%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "SGBMAY29",
// 			qty: 2,
// 			avg: 4727.0,
// 			price: 4719.0,
// 			net: "-0.17%",
// 			day: "+0.15%",
// 		},
// 		{
// 			name: "TATAPOWER",
// 			qty: 5,
// 			avg: 104.2,
// 			price: 124.15,
// 			net: "+19.15%",
// 			day: "-0.24%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "TCS",
// 			qty: 1,
// 			avg: 3041.7,
// 			price: 3194.8,
// 			net: "+5.03%",
// 			day: "-0.25%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "WIPRO",
// 			qty: 4,
// 			avg: 489.3,
// 			price: 577.75,
// 			net: "+18.08%",
// 			day: "+0.32%",
// 		},
// 	];
// 	tempHoldings.forEach((item) => {
// 		let newHolding = new HoldingsModel({
// 			name: item.name,
// 			qty: item.qty,
// 			avg: item.avg,
// 			price: item.price,
// 			net: item.net,
// 			day: item.day,
// 		});
// 		newHolding.save();
// 	});
// 	res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
// 	let tempPositions = [
// 		{
// 			product: "CNC",
// 			name: "EVEREADY",
// 			qty: 2,
// 			avg: 316.27,
// 			price: 312.35,
// 			net: "+0.58%",
// 			day: "-1.24%",
// 			isLoss: true,
// 		},
// 		{
// 			product: "CNC",
// 			name: "JUBLFOOD",
// 			qty: 1,
// 			avg: 3124.75,
// 			price: 3082.65,
// 			net: "+10.04%",
// 			day: "-1.35%",
// 			isLoss: true,
// 		},
// 	];

// 	tempPositions.forEach((item) => {
// 		let newPosition = new PositionsModel({
// 			product: item.product,
// 			name: item.name,
// 			qty: item.qty,
// 			avg: item.avg,
// 			price: item.price,
// 			net: item.net,
// 			day: item.day,
// 			isLoss: item.isLoss,
// 		});
// 		newPosition.save();
// 	});
// 	res.send("Done!");
// });

app.get("/allHoldings", async (req, res) => {
	let allHoldings = await HoldingsModel.find();
	res.send(allHoldings);
});

app.get("/allPositions", async (req, res) => {
	let allPositions = await PositionsModel.find();
	res.send(allPositions);
});

app.post("/newOrder", async (req, res) => {
	let newOrders = new OrdersModel({
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
		mode: req.body.mode,
	});
	newOrders.save();
	res.send("Orders Saved!");
});

app.listen(PORT, () => {
	console.log("App started!");
	mongoose.connect(uri);
	console.log("DB connected!");
});
