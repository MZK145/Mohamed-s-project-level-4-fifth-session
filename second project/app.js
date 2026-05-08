import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Logger middleware
const logger = (req, res, next) => {
  console.log(`New request at ${req.method} ${req.url}`);
  next();
};

app.use(logger);
app.use(express.json());
app.use(helmet());

// Daily tips array
const dailyTips = [
  { id: 1, tip: "Drink water." },
  { id: 2, tip: "Sleep well." },
  { id: 3, tip: "Eat healthy." }
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome.");
});

app.get("/tips", (req, res) => {
  res.json(dailyTips);
});

// Random tip route
app.get("/tip", (req, res) => {
  const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];
  res.json(randomTip);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
