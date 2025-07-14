# Stream-Video-Calls

Dự án này xây dựng một hệ thống gọi video trực tuyến với tính năng chat, sử dụng React cho FrontEnd và Node.js/Express cho BackEnd, tích hợp Stream API.

## 📁 Cấu trúc thư mục

```
├── FrontEnd/      # Ứng dụng giao diện người dùng (React + Vite)
│   ├── src/
│   │   ├── components/   # Các component React
│   │   ├── pages/        # Các trang chính
│   │   ├── store/        # Quản lý trạng thái (zustand)
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/, constants/ # Thư viện & hằng số
│   │   ├── main.jsx, App.jsx, index.css
│   ├── public/
│   ├── package.json
│   └── ...
├── BackEnd/       # API server (Node.js + Express)
│   ├── src/
│   │   ├── controllers/  # Xử lý logic
│   │   ├── routes/       # Định tuyến API
│   │   ├── models/       # Mô hình dữ liệu (MongoDB)
│   │   ├── middleware/   # Middleware
│   │   ├── lib/          # Thư viện phụ trợ
│   │   └── server.js     # Điểm khởi động server
│   ├── package.json
│   └── ...
├── package.json   # Script tổng hợp build/start
└── ...
```

## 🚀 Công nghệ sử dụng

- **FrontEnd:** React, Vite, TailwindCSS, Zustand, React Query, Stream Video/Chat SDK, React Router, Lucide, DaisyUI, ESLint
- **BackEnd:** Node.js, Express, Mongoose (MongoDB), JWT, BcryptJS, CORS, Cookie-Parser, Dotenv, Stream Chat SDK

## ⚙️ Hướng dẫn cài đặt & chạy dự án

### 1. Clone & cài đặt phụ thuộc

```bash
git clone <repo-url>
cd Stream-Video-Calls
npm install
```

Lệnh trên sẽ tự động cài đặt dependencies cho cả FrontEnd và BackEnd.

### 2. Chạy BackEnd

```bash
npm run start
```

Server backend sẽ chạy ở cổng mặc định (xem trong BackEnd/src/server.js).

### 3. Chạy FrontEnd (dev)

```bash
cd FrontEnd
npm run dev
```

Truy cập http://localhost:5173 (hoặc cổng do Vite chỉ định).

### 4. Build FrontEnd

```bash
cd FrontEnd
npm run build
```

## 📝 Ghi chú

- Cần cấu hình file `.env` cho BackEnd (xem ví dụ trong BackEnd hoặc tài liệu dự án nếu có).
- Dự án sử dụng Stream API, cần đăng ký tài khoản và lấy API key.
- Để phát triển hoặc deploy, hãy đọc kỹ từng package.json của FrontEnd và BackEnd để biết thêm script hữu ích.

---

> Liên hệ hoặc đóng góp: [Tên bạn hoặc nhóm phát triển]
