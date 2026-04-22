import { motion } from "framer-motion";

const particles = Array.from({ length: 30 }, (_, i) => i);

export default function Background() {
  return (
    <div className="background">
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      <div className="aurora aurora-3"></div>

      {particles.map((item) => (
        <motion.span
          key={item}
          className="particle"
          initial={{
            opacity: 0.2,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5 + 0.4,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.2, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}
