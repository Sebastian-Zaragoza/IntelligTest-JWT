# IntelligTest JWT Authentication System

IntelligTest JWT is a customized JWT authentication system built for a MERN-based educational web app. This project includes a fully functional backend and frontend that implement user authentication, registration, email verification, password recovery, and secure token-based access control.

## 📁 Project Structure

```
IntelligTest-JWT/
├── IntelligTest-Backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── cors.ts
│   │   │   ├── database.ts
│   │   │   └── nodemailer.ts
│   │   ├── controllers/
│   │   │   └── AuthControllers.ts
│   │   ├── emails/
│   │   │   └── AuthEmail.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   └── handleErrors.ts
│   │   ├── models/
│   │   │   ├── token.ts
│   │   │   └── users.ts
│   │   ├── routes/
│   │   │   └── AuthRoutes.ts
│   │   ├── utils/
│   │   │   ├── auth.ts
│   │   │   ├── jst.ts
│   │   │   └── token.ts
│   │   ├── index.ts
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── IntelligTest-Frontend/
│   ├── IntelligTest-Frontend/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── api/
│   │   │   │   └── AuthAPI.ts
│   │   │   ├── components/
│   │   │   │   └── auth/
│   │   │   │       ├── NewPasswordForm.tsx
│   │   │   │       ├── NewPasswordToken.tsx
│   │   │   │       ├── ErrorMessage.tsx
│   │   │   │       └── Logo.tsx
│   │   │   ├── layouts/
│   │   │   │   ├── AppLayout.tsx
│   │   │   │   └── AuthLayout.tsx
│   │   │   ├── lib/
│   │   │   │   └── axios.ts
│   │   │   ├── types/
│   │   │   │   └── Auth.ts
│   │   │   ├── views/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── ConfirmAccountView.tsx
│   │   │   │   │   ├── ForgetPasswordView.tsx
│   │   │   │   │   ├── LoginView.tsx
│   │   │   │   │   ├── NewPasswordView.tsx
│   │   │   │   │   ├── RegisterView.tsx
│   │   │   │   │   └── RequestCodeView.tsx
│   │   │   │   └── DeskView.tsx
│   │   │   ├── index.css
│   │   │   ├── main.tsx
│   │   │   ├── router.tsx
│   │   │   └── vite-env.d.ts
│   │   ├── .env.local
│   │   ├── .gitignore
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── postcss.config.js
│   │   ├── README.md
│   │   ├── tailwind.config.js
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│
└── README.md

```

## 🔐 Features

- User registration with email confirmation
- JWT login with secure token handling
- Password reset via email token
- Role-based route protection
- Reusable middlewares and modular file structure

## 🧪 Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, Email Tokens, bcryptjs
- **Tools:** React Hook Form, Axios, Nodemailer, Zod, dotenv

## 🚀 Quick Start

1. Clone the repo:
   ```
   git clone https://github.com/Sebastian-Zaragoza/Intellig-Test-JWT.git
   ```

2. Install dependencies:
   ```
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. Configure your `.env` files in the root and backend folders.

4. Run development servers:
   ```
   cd backend && npm run dev
   cd ../frontend && npm run dev
   ```

## 🧠 Motivation

This system is designed for **IntelligTest**, an AI-driven test generator where students upload their notes and get quizzes generated. This repository handles the secure authentication and user flow.

## 🤝 Contributing

Feel free to fork and contribute by opening pull requests.

## 📃 License

This project is licensed under the MIT License.
