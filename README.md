🎉✨ IntelligTest JWT Authentication System ✨🎉

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 Description
A customized JWT-based authentication system for the MERN-based IntelligTest educational web app. Enables secure user registration, email verification, login, password reset, and robust token-based access control.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React, Vite, TypeScript, TailwindCSS
- **Auth Tools:** JSON Web Tokens (JWT), bcryptjs, Nodemailer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 Project Structure
\`\`\`bash
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
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 JWT Authentication

**Backend Implementation:**
- 📦 **Token Generation:** Utilizes \`jsonwebtoken\` to sign access and refresh tokens with secure secrets.
- 🛡️ **Middleware:** \`auth.ts\` verifies and decodes JWT on protected routes.
- 📩 **Token Storage:** Refresh tokens stored in DB, enabling token revocation and rotation.
- 🔄 **Token Refresh Endpoint:** Supports issuing new access tokens using a valid refresh token.

**Frontend Integration:**
- 🌐 **Auth API:** Centralized \`AuthAPI.ts\` manages login, registration, token refresh, and logout.
- 📋 **Hooking Tokens:** Axios interceptors automatically attach access token to outgoing requests.
- 🔄 **Automatic Refresh:** On token expiry, frontend triggers refresh flow and retries requests seamlessly.
- 🚪 **Route Protection:** High-order components guard private routes, redirecting unauthenticated users to login.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Quick Start

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/Sebastian-Zaragoza/IntelligTest-JWT.git
   \`\`\`
2. **Install dependencies:**
   \`\`\`bash
   cd IntelligTest-Backend && npm install
   cd ../IntelligTest-Frontend && npm install
   \`\`\`
3. **Configure environment:**
   - Copy \`.env.example\` to \`.env\` (backend) and \`.env.local\` (frontend).
   - Set \`JWT_SECRET\`, \`JWT_EXPIRES_IN\`, database URI, email credentials, and frontend API URL.
4. **Run in development:**
   \`\`\`bash
   cd IntelligTest-Backend && npm run dev
   cd ../IntelligTest-Frontend && npm run dev
   \`\`\`
5. **Open your browser:**
   Navigate to \`http://localhost:3000\` for frontend and \`http://localhost:5000\` for API.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤝 Contributing

Contributions are welcome! Please open issues or pull requests to improve features, fix bugs, or enhance documentation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 License

MIT © Sebastian Zaragoza

This project is licensed under the MIT License.
