# 💸 Loan Management Web Application in Typescript React

A full-stack Loan Management system with authentication, user loan applications, and admin approval features.

- 🌐 **Frontend**: Next.js
- 🔧 **Backend**: Node.js + Express  
- 🗃️ **Database**: MongoDB  
- 🚀 **Deployment**: Vercel (Backend), Localhost/Frontend  
- 📽️ **[Watch Demo]: https://drive.google.com/file/d/1NvCDM_i_qTfijCElCA0i7K2MMYPV9_nq/view?usp=drive_link**

---

## 📁 Project Structure

## 📦 Server Side (`server/`)

### 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS
- Body Parser
- Vercel for deployment

### 📂 File Structure

```bash
server/
├── routes/
│   ├── userRoutes.js       # Routes for user registration, login
│   └── loanRoutes.js       # Routes for loan application and approval
├── controllers/
│   ├── userController.js   # Logic for handling user auth
│   └── loanController.js   # Logic for handling loan operations
├── models/
│   ├── User.js             # User schema
│   └── Loan.js             # Loan schema
├── .env                    # Environment variables
├── vercel.json             # CORS and routing configuration for Vercel
└── app.js                  # Express entry point
```
### 🔑 Environment Variables (.env)
```
MONGODB_SERVER_PORT=your-mongo-uri
PORT=8000
```

### 💻 Client Side (client/)
- 🔧 Tech Stack
- React (Vite)
- Tailwind CSS (optional)
- React Router
- Fetch API

### 📂 File Structure

```bash
client/
├── src/
│   ├── pages/
│   │   ├── Register.jsx         # User registration form
│   │   ├── Login.jsx            # User login form
│   │   ├── ApplyLoan.jsx        # Form to apply for loans
│   │   ├── LoanStatus.jsx       # View user loan status
│   │   └── AdminPanel.jsx       # Admin approval dashboard
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── ProtectedRoute.jsx   # Restricts routes based on auth
│   ├── App.jsx                  # Main routing logic
│   ├── main.jsx                 # Entry point
│   └── config.js                # Exports `NEXT_PUBLIC_BACKEND_URL`
└── .env                         # Frontend ENV vars
```

### 🔑 Environment Variables (.env)
```
VITE_BACKEND_URL=https://credit-sea-loan-app-chi.vercel.app
```

### 🧪 Features
- ✅ User Signup & Login (JWT-based)

- 📝 Loan Application Submission

- 🔍 View Loan Status (Approved / Rejected)

- 🛠️ Admin Panel for Approving Loans

- 🔐 Protected Routes

- ☁️ Full deployment on Vercel

  ### 📽️ Demo Video
👉 https://drive.google.com/file/d/1NvCDM_i_qTfijCElCA0i7K2MMYPV9_nq/view?usp=drive_link
