# Smart Task Manager (Full Stack)

## 🚀 Tech Stack
- Frontend: React.js (TypeScript, MUI)
- Backend: Node.js + Express + TypeScript
- Database: MySQL
- Auth: JWT

---

## 📌 Features
- User Signup & Login (JWT authentication)
- Protected Routes
- Task CRUD (Create, Read, Update, Delete)
- User-specific task management
- Clean UI using Material UI

---

## 🧠 Architecture
- Controller → Service → DB
- Middleware for authentication
- Axios interceptor for token handling

---

## 🔐 Authentication Flow
1. User logs in → gets JWT token
2. Token stored in localStorage
3. Token sent in headers
4. Backend verifies token
5. Access granted to protected routes

---

## 📂 Project Structure
api/
controllers/
services/
routes/
middleware/

app/
pages/
components/
services/


---

## ⚙️ Setup

### Backend

cd api
npm install
npm run dev

### Frontend

cd app
npm install
npm start
