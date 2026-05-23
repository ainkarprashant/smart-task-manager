import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ❌ If no token → redirect
    if (!token) {
      navigate("/");
      return;
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={() => {
  localStorage.removeItem("token");
  navigate("/");
}}>
  Logout
</button>
      {tasks.map((task: any) => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}