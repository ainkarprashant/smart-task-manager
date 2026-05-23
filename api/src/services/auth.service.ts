import { db } from "../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ SIGNUP LOGIC
export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  // 1. Check if email already exists
  const [existingUsers]: any = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUsers.length > 0) {
    throw new Error("Email already exists");
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert user into DB
  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
};

// ✅ LOGIN LOGIC
export const loginUser = async (email: string, password: string) => {
  // 1. Find user
  const [users]: any = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  const user = users[0];

  if (!user) {
    throw new Error("User not found");
  }

  // 2. Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  // 3. Generate JWT token
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );

  return token;
};