import express from "express";

const app = express();

app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
  console.log("Root hit");
  res.send("API is running 🚀");
});

// TEST ROUTE
app.get("/test", (req, res) => {
  console.log("Test API hit");
  res.json({ message: "API is working 🚀" });
});

export default app;