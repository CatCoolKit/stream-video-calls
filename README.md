# Stream-Video-Calls

This project builds an online video calling system with chat functionality, using React for the FrontEnd and Node.js/Express for the BackEnd, integrated with the Stream API.

## 📁 Directory Structure

```
├── FrontEnd/      # User interface application (React + Vite)
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Main pages
│   │   ├── store/        # State management (zustand)
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/, constants/ # Libraries & constants
│   │   ├── main.jsx, App.jsx, index.css
│   ├── public/
│   ├── package.json
│   └── ...
├── BackEnd/       # API server (Node.js + Express)
│   ├── src/
│   │   ├── controllers/  # Logic handlers
│   │   ├── routes/       # API routes
│   │   ├── models/       # Data models (MongoDB)
│   │   ├── middleware/   # Middleware
│   │   ├── lib/          # Helper libraries
│   │   └── server.js     # Server entry point
│   ├── package.json
│   └── ...
├── package.json   # Aggregate build/start scripts
└── ...
```

## 🚀 Technologies Used

- **FrontEnd:** React, Vite, TailwindCSS, Zustand, React Query, Stream Video/Chat SDK, React Router, Lucide, DaisyUI, ESLint
- **BackEnd:** Node.js, Express, Mongoose (MongoDB), JWT, BcryptJS, CORS, Cookie-Parser, Dotenv, Stream Chat SDK

## ⚙️ Installation & Running Guide

### 1. Clone & Install Dependencies

```bash
git clone <repo-url>
cd Stream-Video-Calls
npm install
```

The above command will automatically install dependencies for both FrontEnd and BackEnd.

### 2. Run BackEnd

```bash
npm run start
```

The backend server will run on the default port (see BackEnd/src/server.js).

### 3. Run FrontEnd (dev)

```bash
cd FrontEnd
npm run dev
```

Access http://localhost:5173 (or the port specified by Vite).

### 4. Build FrontEnd

```bash
cd FrontEnd
npm run build
```

## 📝 Notes

- You need to configure the `.env` file for the BackEnd (see the example in BackEnd or project documentation if available).
- The project uses the Stream API, so you need to register an account and obtain an API key.
- For development or deployment, carefully read each package.json in FrontEnd and BackEnd for more useful scripts.

---

> Contact or contribute: [Your name or development team]
