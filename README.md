# 🍓 Fruit Login – Interactive Animated Login UI

A fun, interactive and modern **login page UI** where fruits and eyes react dynamically based on user input like email and password. Built using **React + Framer Motion** with creative animations.

---

## 🚀 Features

- 👁️ Interactive eye tracking animations
- 🍎 Fruits react based on user actions
- ✍️ Email validation with real-time error feedback
- 🔒 Password visibility toggle
- 🎬 Smooth Framer Motion animations
- 🎨 Clean modular component structure
- 📱 Responsive UI design

---

## 🧠 Concept

This project creates a playful login experience:
- When user types email → fruits/eyes react
- Password field → eyes close/open behavior
- Invalid email → warning message (“Please include @ in your email”)

---

## 🛠️ Tech Stack

- React.js ⚛️
- Framer Motion 🎞️
- CSS3 🎨
- Vite ⚡

---

## 📁 Project Structure


fruit-login/
│
├── public/
├── src/
│ ├── components/
│ │ ├── Background.jsx
│ │ ├── Eye.jsx
│ │ ├── FruitScene.jsx
│ │ └── LoginCard.jsx
│ │
│ ├── styles/
│ │ ├── app.css
│ │ ├── background.css
│ │ ├── fruitScene.css
│ │ └── loginCard.css
│ │
│ ├── App.jsx
│ ├── main.jsx
│
├── index.html
├── package.json
└── vite.config.js


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/fruit-login.git
2. Navigate to project folder
cd fruit-login
3. Install dependencies
npm install
4. Run the project
npm run dev
✨ How It Works
LoginCard.jsx → Handles email/password UI + validation
Eye.jsx → Controls eye movement & expressions
FruitScene.jsx → Manages fruit animations
Background.jsx → Animated background layer
styles/ → Handles UI styling for each component
📌 Future Improvements
🎯 Better AI-based eye tracking
🍓 More fruit emotions (happy, confused, sleepy)
🔐 Strong password validation rules
🌙 Dark/light mode toggle
📊 Form analytics animations
💡 Idea Inspiration

A gamified login UI that makes authentication fun instead of boring.
