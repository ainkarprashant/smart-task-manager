import { Request, Response } from "express";
import { createUser, loginUser } from "../services/auth.service";

// ✅ SIGNUP CONTROLLER
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    await createUser(name, email, password);

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};

// ✅ LOGIN CONTROLLER
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    const token = await loginUser(email, password);

    res.json({ token });

  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};