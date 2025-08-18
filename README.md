# 🏋️ Fitness Game – AI Powered Fitness Tracking & Gamification

![GitHub stars](https://img.shields.io/github/stars/Sairam-kattunga/fitness-game?style=flat&logo=github)
![GitHub forks](https://img.shields.io/github/forks/Sairam-kattunga/fitness-game?style=flat&logo=github)
![GitHub issues](https://img.shields.io/github/issues/Sairam-kattunga/fitness-game)
![GitHub last commit](https://img.shields.io/github/last-commit/Sairam-kattunga/fitness-game)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📌 Overview
**Fitness Game** is a full-stack web application that transforms workouts into an engaging game-like experience.  
It combines **Spring Boot (Java backend)** and a **modern JavaScript frontend** to provide:

- 🎮 Gamification of fitness routines  
- 📊 Real-time progress tracking  
- 👥 User profiles, achievements & leaderboards  
- 🔒 Secure authentication & REST APIs  
- ☁️ Cloud-ready deployment (Railway / GitHub Pages)  

Built with **enterprise-grade patterns**, it ensures scalability, maintainability, and extensibility for real-world production use.  

---

## 🏗️ Architecture

```

+-------------------------+
\|        Frontend         |  -> React / Vanilla JS + CSS
\|  (Gamified UI/UX)       |  -> Deployed via GitHub Pages
+-------------------------+
|
v
+-------------------------+
\|        Backend          |  -> Spring Boot (Java)
\| REST APIs | Game Engine |  -> Deployed on Railway
+-------------------------+
|
v
+-------------------------+
\|      Database (Future)  |  -> PostgreSQL / MySQL
+-------------------------+

````

- **Frontend**: Handles UI, animations, and game flow.  
- **Backend**: Provides APIs, authentication, business logic.  
- **Database (optional)**: Stores users, progress, rewards.  
- **Cloud**: Decoupled hosting → Frontend on GitHub Pages, Backend on Railway.  

---

## ⚙️ Tech Stack

### **Frontend**
- HTML5, CSS3, JavaScript (ES6+)
- Responsive design with Flex/Grid
- Optional: React.js for dynamic state management

### **Backend**
- Java 17+  
- Spring Boot 3.x  
- REST API (Spring Web)  
- Spring Data JPA (for DB persistence)  
- Maven (Build & Dependency Management)  

### **Deployment**
- Railway (Backend with dynamic `PORT`)  
- GitHub Pages (Frontend static hosting)  
- Docker-ready (optional future improvement)  

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Sairam-kattunga/fitness-game.git
cd fitness-game
````

### 2️⃣ Backend Setup (Spring Boot)

Ensure you have **JDK 17+** and **Maven** installed.

```bash
mvn clean package
java -jar target/fitness-game-0.0.1-SNAPSHOT.jar
```

Backend runs at:
👉 `http://localhost:8080`

### 3️⃣ Frontend Setup

Simply open `frontend/index.html` in your browser.
(or serve via a local server):

```bash
cd frontend
npx serve .
```

Frontend runs at:
👉 `http://localhost:3000`

---

## ☁️ Deployment

### **Backend on Railway**

1. Add `application.properties`:

   ```properties
   server.port=${PORT:8080}
   ```
2. Add `Procfile`:

   ```
   web: java -jar target/fitness-game-0.0.1-SNAPSHOT.jar
   ```
3. Push to GitHub → Railway auto-deploys.

### **Frontend on GitHub Pages**

```bash
git checkout -b gh-pages
git subtree push --prefix frontend origin gh-pages
```

Live at:
👉 `https://sairam-kattunga.github.io/fitness-game/`

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | `/api/users`      | Fetch all users          |
| POST   | `/api/users`      | Register new user        |
| GET    | `/api/progress/1` | Get progress of user `1` |
| POST   | `/api/workout`    | Log new workout session  |

---

## 🛡️ Security

* JWT-based Authentication (future integration)
* CORS enabled for frontend-backend communication
* Spring Security for endpoint protection

---

## 🛠️ Roadmap

* ✅ Basic gamified frontend
* ✅ Spring Boot backend APIs
* 🔲 Database integration (PostgreSQL)
* 🔲 JWT authentication & sessions
* 🔲 Leaderboards & achievements
* 🔲 Dockerized deployment

---

## 👨‍💻 Developer Guide

### Project Structure

```
fitness-game/
│── frontend/ # All frontend files (UI, JS, CSS)
│ ├── index.html
│ ├── styles.css
│ ├── script.js
│ └── assets/ # images, icons, etc.
│
│── src/ # Spring Boot backend source code
│ ├── main/
│ │ ├── java/com/fitnessgame/ # Java backend classes
│ │ └── resources/ # Configurations (application.properties, static, templates)
│ └── test/ # Unit tests
│
│── target/ # Build artifacts (ignored in git)
│── pom.xml # Maven dependencies
│── Procfile # Railway start command
│── README.md # Project documentation
```


---

## 📸 Screenshots (Optional)
<img width="3200" height="2000" alt="Screenshot (28)" src="https://github.com/user-attachments/assets/13f5df2c-11d2-4359-ad81-033a4b78500b" />


---

## 🤝 Contributing

Contributions are welcome!

* Fork the repo
* Create a feature branch
* Submit a PR

---

## 📜 License

This project is licensed under the **MIT License** – free to use & modify.

---

## 🙌 Acknowledgements

* [Spring Boot](https://spring.io/projects/spring-boot)
* [Railway](https://railway.app/)
* [GitHub Pages](https://pages.github.com/)
* Open-source community for continuous inspiration

