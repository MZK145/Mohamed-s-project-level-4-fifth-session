import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import{getProduct} from "./vault.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DISCOUNT_SECRET = process.env.DISCOUNT_SECRET || "defaultSecret";

app.use(helmet());

// This route is set up to receive an ID and a SECRET from the URL
app.get("/product/:id/:userSecret", async (req, res) => {
  try {
    // req.params is a special object that holds the URL data
    const { id, userSecret } = req.params;
    const product = await getProduct(id );
    if (userSecret === DISCOUNT_SECRET) {
      res.send(`admin. unlocked :${product.name}is for you! Enjoy a special discount!`);
    } else {
      res.status(403).send("Error: Unauthorized access.");
    }
  } catch (error) {
    res.status(404).send("Error: Product not found.");
  }
});
console.log("PORT:", PORT);
console.log("SECRET:", DISCOUNT_SECRET);
app.listen(PORT, () => console.log(`🚀 Vault Server running on port ${PORT}`));
