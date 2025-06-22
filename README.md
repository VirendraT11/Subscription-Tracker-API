# 🚀 Subscription Tracker API

A production-ready ⚙️ backend service built with Node.js & Express.js to help users monitor and manage their recurring subscriptions effortlessly.

## Table of Contents
- [🔧 Tech Stack](#-tech-stack)
- [✨ Features](#-features)
- [⚙️ Setup & Run](#️-setup--run)
- [🧩 API Endpoints](#-api-endpoints)
- [📬 Env Variables](#-env-variables)
- [💡 Tips & Notes](#-tips--notes)
- [📱 Connect with Me](#-connect-with-me)
- [📄 License](#-license)

---

## 🔧 Tech Stack
- **Node.js** & **Express.js** – server-side logic  
- **MongoDB** with **Mongoose** – data modeling & persistence 💾  
- **JWT** – secure authentication  
- **Arcjet** – advanced rate-limiting & bot protection  
- **QStash** (Upstash) – reliable message scheduling for email reminders 📮  
- **Nodemailer** – automated subscription reminder emails  
- Custom **middleware**, structured **controllers**, **models**, and **utils** for clean architecture :contentReference[oaicite:1]{index=1}

---

## ✨ Features
- User signup/login with JWT authentication  
- CRUD operations for subscriptions—title, price, frequency, start date, etc.  
- Secure API with Arcjet rate-limiting  
- Scheduled email reminders using QStash workflows  
- Global error handling & input validation  
- Comprehensive logging for easy debugging  
- Modular, reusable code architecture for scalability :contentReference[oaicite:2]{index=2}

---

## ⚙️ Setup & Run
1. **Clone repo**  
   ```bash
   git clone https://github.com/VirendraT11/Subscription-Tracker-API.git
   cd Subscription-Tracker-API


2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Configure environment** (see next section)
4. **Start server**

   ```bash
   npm run dev
   ```
5. **Access** API at `http://localhost:5500`

---

## 🧩 API Endpoints

* `POST /api/auth/signup` – register new user
* `POST /api/auth/login` – user login & token
* `GET /api/subscriptions` – list user subscriptions
* `POST /api/subscriptions` – add a subscription
* `PUT /api/subscriptions/:id` – update subscription
* `DELETE /api/subscriptions/:id` – remove subscription

Includes advanced **Arcjet** protection on all endpoints and **QStash** webhook for sending reminder emails.

---

## 📬 Env Variables

```bash
PORT=5500
NODE_ENV=development

DB_URI=<Your MongoDB URI>

JWT_SECRET=<your_jwt_secret>
JWT_EXPIRES_IN=1d

ARCJET_KEY=<arcjet_key>
ARCJET_ENV=development

QSTASH_URL=<qstash_url>
QSTASH_TOKEN=<qstash_token>

EMAIL_PASSWORD=<nodemailer_password>
```

---

## 💡 Tips & Notes

* Use **Postman** or similar tool to test API endpoints
* Ensure **Arcjet and QStash** keys are correct or features will be disabled
* Database models in `/models`, logic in `/controllers`, routes and middleware are clearly separated—for easy extensions or plugin integrations

---

## 📱 Connect with Me

* [🔗 LinkedIn](https://www.linkedin.com/in/virendra-tambavekar/)
* [🐦 Twitter (X)](https://x.com/VirendraCodes)

Follow me for more Node.js projects, tips, and open-source contributions!

---

## 📄 License

This project is available under the **MIT License**. Feel free to use and evolve it!

---

### Thank you for checking out my project! ⭐
