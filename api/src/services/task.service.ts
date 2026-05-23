import { db } from "../config/db";

// CREATE TASK
export const createTaskService = async (
  title: string,
  description: string,
  priority: string,
  userId: number
) => {
  await db.query(
    "INSERT INTO tasks (title, description, priority, user_id) VALUES (?, ?, ?, ?)",
    [title, description, priority, userId]
  );
};

// GET TASKS (USER SPECIFIC)
export const getTasksService = async (userId: number) => {
  const [tasks] = await db.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [userId]
  );

  return tasks;
};

// UPDATE TASK
export const updateTaskService = async (
  id: number,
  title: string,
  status: string,
  priority: string
) => {
  await db.query(
    "UPDATE tasks SET title=?, status=?, priority=? WHERE id=?",
    [title, status, priority, id]
  );
};

// DELETE TASK
export const deleteTaskService = async (id: number) => {
  await db.query("DELETE FROM tasks WHERE id=?", [id]);
};