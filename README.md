## 🔐 Description  
A customized JWT-based authentication system for the MERN-based IntelligTest educational web app. It enables secure user registration, email verification, login, password reset, and robust token-based access control.

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Frontend**: React, Vite, TypeScript, TailwindCSS  
- **Auth Tools**: JSON Web Tokens (JWT), bcryptjs, Nodemailer

## 📂 Project Structure

```bash
IntelligTest-JWT/
├── IntelligTest-Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── emails/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
└── IntelligTest-Frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── layouts/
    │   └── views/
    ├── .env.local
    └── package.json
```

## 🔑 JWT Authentication

### Backend Implementation

- 📦 **Token Generation**  
  Utilizes `jsonwebtoken` to sign access and refresh tokens with secure secrets.  
- 🛡️ **Middleware**  
  The `auth.ts` middleware verifies and decodes JWTs on protected routes.  
- 💾 **Token Storage**  
  Refresh tokens are stored in the database, enabling token revocation and rotation.  
- 🔄 **Token Refresh Endpoint**  
  Provides an endpoint to issue new access tokens using a valid refresh token.

### Frontend Integration

- 🌐 **Auth API**  
  Centralized `AuthAPI.ts` manages login, registration, token refresh, and logout flows.  
- 📋 **Token Attachment**  
  Axios interceptors automatically attach access tokens to outgoing requests.  
- 🔄 **Automatic Refresh**  
  On token expiry, the frontend triggers the refresh flow and retries requests seamlessly.  
- 🚪 **Route Protection**  
  Higher-order components guard private routes, redirecting unauthenticated users to the login page.

## 🚀 Quick Start

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Sebastian-Zaragoza/IntelligTest-JWT.git
   ```
2. **Install dependencies**  
   ```bash
   cd IntelligTest-Backend && npm install
   cd ../IntelligTest-Frontend && npm install
   ```
3. **Configure environment**  
   - Copy `.env.example` to `.env` (backend) and `.env.local` (frontend).  
   - Set `JWT_SECRET`, `JWT_EXPIRES_IN`, your database URI, email credentials, and frontend API URL.
4. **Run the apps**  
   ```bash
   cd IntelligTest-Backend && npm run dev
   cd ../IntelligTest-Frontend && npm run dev
   ```
5. **Access the application**  
   - 🔗 Frontend: `http://localhost:3000`  
   - 🖥️ Backend API: `http://localhost:5000`

## 📄 License

MIT © Sebastian Zaragoza

## 📫 Contact

👤 **Sebastian Zaragoza**  
🔗 GitHub: https://github.com/Sebastian-Zaragoza  
✉️ Email: galindozaragozasebastian@gmail.com
