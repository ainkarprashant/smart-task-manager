import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box
} from "@mui/material";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

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

      {tasks.map((task: any) => (
        <Card key={task.id} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>{task.description}</Typography>
            <Typography color="text.secondary">
              Priority: {task.priority}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}