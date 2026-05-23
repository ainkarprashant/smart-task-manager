import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "low"
  });

  const navigate = useNavigate();

  const createTask = async (e: any) => {
    e.preventDefault();

    await API.post("/api/tasks", form);
    setForm({ title: "", description: "", priority: "low" });
    fetchTasks(); // refresh list
  };

  const deleteTask = async (id: number) => {
  await API.delete(`/api/tasks/${id}`);
  fetchTasks();
};

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/api/tasks");
    setTasks(res.data);
  };

  const updateTask = async (task: any) => {
  await API.put(`/api/tasks/${task.id}`, {
    title: task.title,
    status: task.status === "pending" ? "completed" : "pending",
    priority: task.priority
  });

  fetchTasks();
};

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Typography variant="h4">Dashboard</Typography>
        <Button variant="outlined" onClick={logout}>
          Logout
        </Button>
      </Box>

      <Box component="form" onSubmit={createTask} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <TextField
          fullWidth
          label="Description"
          margin="normal"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <TextField
            select
            label="Priority"
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            fullWidth
            >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
        </TextField>

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Create Task
        </Button>
      </Box>

      {tasks.map((task: any) => (
        <Card key={task.id} sx={{ marginTop: 2 }}>
        <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>{task.description}</Typography>
            <Typography>Priority: {task.priority}</Typography>

            <Button
            color="error"
            onClick={() => deleteTask(task.id)}
            sx={{ mt: 1 }}
            >
            Delete
            </Button>
            <Button
            onClick={() => updateTask(task)}
            sx={{ mt: 1, ml: 2 }}
            >
            {task.status === "pending" ? "Mark Complete" : "Mark Pending"}
            </Button>
        </CardContent>
        </Card>
      ))}
    </Container>
  );
}