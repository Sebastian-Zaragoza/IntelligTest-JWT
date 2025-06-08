IntelligTest JWT System

This repository contains a custom-made JWT-based authentication system for IntelligTest, a web application designed to generate educational tests from user-uploaded notes. This subproject handles the authentication workflow from both the frontend and backend, built from scratch.

Features

- ✅ Custom JWT authentication
- ✅ Secure user registration with email confirmation
- ✅ Login & logout with token generation
- ✅ Token validation and refresh
- ✅ Password reset via email token
- ✅ Frontend integration with authentication routes
- ✅ Modular structure for scalability

Project Structure

Intellig-Test-JWT/
│
├── backend/                  # Express server with all authentication logic
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── .env.example          # Add your JWT secret & email config here
│
├── frontend/                 # React frontend for registration/login/reset UI
│   └── src/
│       ├── components/
│       ├── pages/
│       └── api/
│
└── README.md

Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Frontend: React, React Router, Axios, Tailwind CSS
- Email Service: Nodemailer
- Security: bcrypt, dotenv, token expiration

How to Run Locally

1. Clone the Repository

git clone https://github.com/Sebastian-Zaragoza/Intellig-Test-JWT.git
cd Intellig-Test-JWT

2. Setup Environment Variables

In the /backend/ folder, create a .env file using the provided .env.example:

JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000

3. Start the Backend

cd backend
npm install
npm run dev

4. Start the Frontend

cd frontend
npm install
npm run dev

Visit: http://localhost:4000

Future Improvements

- Add 2FA support
- JWT refresh token rotation
- OAuth integration
- Unit tests for auth flows

License

This project is licensed under the MIT License.

Built with 💡 by Sebastian Zaragoza (https://github.com/Sebastian-Zaragoza)
