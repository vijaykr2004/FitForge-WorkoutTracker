# 🏋️ FitForge – Workout Tracker (MERN Stack)

FitForge is a full-stack MERN Workout Tracker application where users can signup/login and manage their personal workouts securely.

Each user has their own workouts stored in MongoDB, protected using JWT Authentication.

---

## 🚀 Features

- ✅ Signup & Login (JWT Authentication)
- ✅ Password Hashing (bcrypt)
- ✅ Create Workout (Title, Load, Reps)
- ✅ View Workouts (Latest First)
- ✅ Delete Workout
- ✅ User-Specific Workouts (each user sees only their own)
- ✅ Multiple Theme Modes (UI Theme Switcher)
- ✅ Responsive UI (mobile & web)

---
## 🔐 Api Endpoints
API Routes
Auth Routes

POST /api/user/signup → Signup user

POST /api/user/login → Login user

Workout Routes (Protected)

GET /api/workouts → Get all workouts

POST /api/workouts → Create workout

DELETE /api/workouts/:id → Delete workout

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API
- Custom CSS Themes

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📂 Folder Structure
FitForge-WorkoutTracker/
│
├── Backend/
│ ├── Controller/
│ │ ├── userController.js
│ │ └── workoutController.js
│ │
│ ├── Middleware/
│ │ └── requireAuth.js
│ │
│ ├── Models/
│ │ ├── userModel.js
│ │ └── workoutModel.js
│ │
│ ├── Routes/
│ │ ├── user.js
│ │ └── workouts.js
│ │
│ ├── .env
│ ├── server.js
│ └── package.json
│
└── frontend/
├── public/
├── src/
│ ├── Components/
│ │ ├── navbar.js
│ │ ├── Workoutdetails.js
│ │ └── WorkoutForm.js
│ │
│ ├── Context/
│ │ ├── AuthContext.js
│ │ └── WorkoutContext.js
│ │
│ ├── hooks/
│ │ ├── useAuthContext.js
│ │ ├── useLogin.js
│ │ ├── useLogout.js
│ │ ├── useSignup.js
│ │ └── useWorkoutsContext.js
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Login.js
│ │ └── Signup.js
│ │
│ ├── App.js
│ ├── index.js
│ ├── index.css
│ └── App.css
└── package.json


---

## ⚙️ Installation & Setup (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/https://github.com/vijaykr2004/FitForge-WorkoutTracker.git

cd Backend
npm install

------
# Create .env file inside Backend/

PORT=2000
MONGO_URL=your_mongodb_atlas_url
SECRET=your_jwt_secret
npm start


## frontend setups
cd frontend
npm install
npm start

👨‍💻 Author
Vijay Kumar Gupta
Final Year B.Tech (CSE) Student
Full Stack Developer (Fresher)

📜 License
This project is created for learning and practice purposes.
You are free to use and modify it.

⭐ If you like this project, give it a star!




