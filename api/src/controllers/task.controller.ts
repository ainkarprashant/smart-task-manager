import { Request, Response } from "express";
import {
  createTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService
} from "../services/task.service";

// CREATE TASK
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, priority } = req.body;
    const userId = (req as any).user.id;

    await createTaskService(title, description, priority, userId);

    res.json({ message: "Task created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// GET TASKS
export const getTasks = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const tasks = await getTasksService(userId);

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

// UPDATE TASK
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, status, priority } = req.body;

    await updateTaskService(Number(id), title, status, priority);

    res.json({ message: "Task updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

// DELETE TASK
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteTaskService(Number(id));

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};