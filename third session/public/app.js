import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const requestTimer = (req, res, next) => {
    const start = Date.now();
    next();
    const duration = Date.now() - start;
    console.log(`performance log ${req.method} ${req.url} ${duration}`);
}

app.use(requestTimer);
app.use(express.static("public"));
app.get("/profile", (req, res) => {
    const filepath = path.join(process.cwd(), "public", "index.html");
  res.sendFile( "filepath");
});

app.listen(PORT, () => {
  console.log("Mission Completed.");
});