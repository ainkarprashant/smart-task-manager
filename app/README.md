# 📋 Smart Task Manager (Full Stack)

A full-stack task management application built with React, Node.js, Express, and MySQL. Features JWT authentication, protected routes, and a clean Material UI interface.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js (TypeScript, Material UI, Axios) |
| **Backend** | Node.js + Express.js (TypeScript) |
| **Database** | MySQL |
| **Authentication** | JWT (JSON Web Tokens) |
| **Styling** | Material UI + Emotion |

---

## ✨ Features

- ✅ User Signup & Login with JWT authentication
- ✅ Protected routes and API endpoints
- ✅ Full Task CRUD operations
- ✅ User-specific task management
- ✅ Priority levels (low, medium, high)
- ✅ Responsive Material UI design
- ✅ Secure token-based authentication
- ✅ Auto logout functionality

---

## 📐 Architecture

### Design Pattern
```
Request → Middleware (Auth) → Controller → Service → Database → Response
```

### Key Components
- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic layer
- **Middleware**: Authentication and validation
- **Axios Interceptor**: Automatic token injection in requests

### Authentication Flow
```
1. User signs up/logs in → Server generates JWT token
2. Token stored in browser's localStorage
3. Token sent in Authorization header for requests
4. Backend middleware verifies token signature
5. Access granted to protected resources
6. Logout clears token from storage
```

---

## 📂 Project Structure

```
smart-task-manager/
├── api/                          # Backend
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   ├── services/            # Business logic
│   │   ├── routes/              # API endpoints
│   │   ├── middleware/          # Auth middleware
│   │   └── index.ts             # Server entry point
│   ├── package.json
│   └── tsconfig.json
│
└── app/                          # Frontend
    ├── src/
    │   ├── pages/               # Page components
    │   ├── components/          # Reusable components
    │   ├── services/            # API service
    │   ├── App.tsx
    │   └── index.tsx
    ├── public/
    ├── package.json
    └── tsconfig.json
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MySQL** (v5.7 or higher)
- **Git**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd smart-task-manager
```

### 2. Backend Setup

```bash
cd api
npm install
```

Create `.env` file in the `api/` directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=smart_task_manager
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Create MySQL database:
```sql
CREATE DATABASE smart_task_manager;
```

Start the backend server:
```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd app
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected Routes)
- `GET /api/tasks` - Get all tasks for logged-in user
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

---

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Frontend and backend route protection
- **Token Verification**: Middleware validates all protected requests
- **Secure Storage**: Tokens stored in localStorage (consider httpOnly cookies for production)
- **Password Security**: Passwords hashed before storage

---

## 🛠️ Development

### Available Scripts

**Backend:**
```bash
npm run dev      # Start development server with auto-reload
npm run build    # Build TypeScript
npm start        # Run production build
```

**Frontend:**
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

---

## 📝 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `DB_HOST` | Database hostname | `localhost` |
| `DB_USER` | Database username | `root` |
| `DB_PASSWORD` | Database password | `root` |
| `DB_NAME` | Database name | `smart_task_manager` |
| `JWT_SECRET` | JWT signing secret | `your_secret_key` |
| `NODE_ENV` | Environment | `development` |

---

## 🐛 Troubleshooting

**Port Already in Use**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**Database Connection Error**
- Verify MySQL is running
- Check credentials in `.env`
- Ensure database exists

**CORS Issues**
- Backend CORS middleware is configured in Express
- Ensure frontend URL is whitelisted

**Authentication Issues**
- Clear localStorage and log in again
- Check browser DevTools → Network tab
- Verify JWT_SECRET is the same on backend

---

## 📚 Dependencies

### Backend
- express
- mysql2
- dotenv
- jsonwebtoken
- cors

### Frontend
- react
- react-router-dom
- @mui/material
- @emotion/react
- axios

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For issues or questions, please open an issue in the repository.