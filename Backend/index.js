import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// Read customers.json manually
const customers = JSON.parse(readFileSync("./data/customers.json", "utf8"));

// API endpoint → GET customers
app.get("/customers", (req, res) => {
  res.json(customers);
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
