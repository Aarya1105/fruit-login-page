import { useEffect, useState } from "react";
import Background from "./components/Background";
import FruitScene from "./components/FruitScene";
import LoginCard from "./components/LoginCard";

export default function App() {
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [activeField, setActiveField] = useState(null); // "email" | "password" | null
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (activeField === "email" && email.length > 0 && !email.includes("@")) {
      setEmailError("Please add @ to your email");
    } else {
      setEmailError("");
    }
  }, [email, activeField]);

  return (
    <div className="app">
      <Background />

      <div className="layout">
        <div className="left-panel">
          <div className="brand">Aarya</div>
          <h1 className="hero-title">WELCOME</h1>

          <FruitScene
            mouse={mouse}
            activeField={activeField}
            email={email}
            password={password}
          />

          <div className="footer-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Help</span>
          </div>
        </div>

        <div className="right-panel">
          <LoginCard
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            activeField={activeField}
            setActiveField={setActiveField}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            emailError={emailError}
          />
        </div>
      </div>
    </div>
  );
}
