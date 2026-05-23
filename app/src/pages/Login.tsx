import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}