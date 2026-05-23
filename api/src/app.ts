import express from "express";
import authRoutes from "./routes/auth.routes";
import { authMiddleware } from "./middleware/auth.middleware";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

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

app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed 🔐",
    user: (req as any).user
  });
});

export default app;