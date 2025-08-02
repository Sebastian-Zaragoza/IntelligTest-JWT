## Overview

IntelligTest-JWT is a robust JWT-based authentication system tailored for the IntelligTest educational web application built on the MERN stack. It provides secure user management features including registration, email verification, login, password reset, and token-based authorization, ensuring protected access in a microservices environment.

## Features

- **User Registration & Verification**: Secure signup with email confirmation to prevent unauthorized accounts.
- **Login & Session Management**: JWT access and refresh tokens for seamless, secure sessions.
- **Password Recovery**: Email-based reset functionality for user convenience.
- **Token Refresh & Revocation**: Automatic token rotation and database-stored refresh tokens for enhanced security.
- **Protected Routes**: Middleware to guard API endpoints and frontend routes against unauthorized access.
- **Error Handling & Validation**: Comprehensive checks for inputs, tokens, and API responses.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB (with Mongoose), JWT, bcrypt.js, Nodemailer
- **Frontend**: React, Vite, TypeScript, Tailwind CSS, Axios
- **Other Tools**: dotenv for environment variables, ts-node-dev for development

## Project Structure

```
IntelligTest-JWT/
├── IntelligTest-Backend/
│   ├── src/
│   │   ├── config/      # Configuration files (e.g., db connection)
│   │   ├── controllers/ # API logic for auth operations
│   │   ├── emails/      # Email templates and utilities
│   │   ├── middleware/  # Auth guards and error handlers
│   │   ├── models/      # Mongoose schemas (e.g., User model)
│   │   ├── routes/      # Express routes for auth endpoints
│   │   └── utils/       # Helper functions (e.g., token generation)
│   ├── .env             # Environment variables
│   ├── package.json     # Dependencies and scripts
│   └── tsconfig.json    # TypeScript configuration
└── IntelligTest-Frontend/
    ├── src/
    │   ├── api/         # API clients (e.g., AuthAPI.ts)
    │   ├── components/  # Reusable UI elements
    │   ├── layouts/     # Page layouts
    │   └── views/       # Main views (e.g., Login, Register)
    ├── .env.local       # Frontend environment variables
    ├── package.json     # Dependencies and scripts
    └── vite.config.ts   # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Email service account (e.g., Gmail for SMTP)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Sebastian-Zaragoza/IntelligTest-JWT.git
   cd IntelligTest-JWT
   ```

2. Set up the backend:
   ```
   cd IntelligTest-Backend
   npm install
   cp .env.example .env  # Edit .env with your secrets (JWT_SECRET, MONGO_URI, etc.)
   npm run dev
   ```

3. Set up the frontend:
   ```
   cd ../IntelligTest-Frontend
   npm install
   cp .env.example .env.local  # Edit with REACT_APP_API_URL=http://localhost:5000
   npm run dev
   ```

### Usage

- Access the frontend at `http://localhost:3000` for registration, login, etc.
- API endpoints are available at `http://localhost:5000/api/auth/` (e.g., `/register`, `/login`).
- Protected routes require a valid JWT in the Authorization header.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Sebastian Zaragoza
- **Email**: galindozaragozasebastian@gmail.com
- **GitHub**: [Sebastian-Zaragoza](https://github.com/Sebastian-Zaragoza)
