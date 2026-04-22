import { motion } from "framer-motion";
import Eye from "./Eye";

export default function FruitScene({ mouse, activeField, email, password }) {
  const isEmail = activeField === "email";
  const isPassword = activeField === "password";
  const blurOthers = isEmail || isPassword;

  return (
    <div className="fruit-scene">
      {/* Mango */}
      <motion.div
        className={`fruit fruit-mango ${blurOthers ? "blurred" : ""}`}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <img src="/assets/mango.png" alt="mango" />
        {!blurOthers && (
          <>
            <div className="eye-wrap mango-eye-left">
              <Eye mouse={mouse} eyeX={120} eyeY={520} size={22} />
            </div>
            <div className="eye-wrap mango-eye-right">
              <Eye mouse={mouse} eyeX={150} eyeY={520} size={22} />
            </div>
          </>
        )}
      </motion.div>

      {/* Pineapple */}
      <motion.div
        className={`fruit fruit-pineapple ${blurOthers ? "blurred" : ""}`}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <img src="/assets/pineapple.png" alt="pineapple" />
        {!blurOthers && (
          <>
            <div className="eye-wrap pineapple-eye-left">
              <Eye mouse={mouse} eyeX={250} eyeY={585} size={22} />
            </div>
            <div className="eye-wrap pineapple-eye-right">
              <Eye mouse={mouse} eyeX={290} eyeY={585} size={22} />
            </div>
          </>
        )}
      </motion.div>

      {/* Apple */}
      <motion.div
        className="fruit fruit-apple"
        animate={
          isEmail
            ? { scale: 1.08, y: -10 }
            : isPassword
            ? { scale: 1.03, y: 0 }
            : { scale: 1, y: 0 }
        }
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
      >
        <img
          src={isPassword ? "/assets/closeeyesapple.png" : "/assets/apple.png"}
          alt="apple"
        />

        {!isPassword && (
          <>
            <div className="eye-wrap apple-eye-left">
              <Eye mouse={mouse} eyeX={445} eyeY={560} size={28} />
            </div>
            <div className="eye-wrap apple-eye-right">
              <Eye mouse={mouse} eyeX={520} eyeY={560} size={28} />
            </div>
          </>
        )}

        {/* Owl */}
        <motion.img
          className="owl"
          src={isEmail ? "/assets/flyowl.png" : "/assets/owl.png"}
          alt="owl"
          animate={
            isEmail
              ? { y: -150, x: 20, rotate: -8, scale: 1.1 }
              : { y: 0, x: 0, rotate: 0, scale: 1 }
          }
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Grape */}
      <motion.div
        className={`fruit fruit-grape ${blurOthers ? "blurred" : ""}`}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        <img src="/assets/grape.png" alt="grape" />
        {!blurOthers && (
          <>
            <div className="eye-wrap grape-eye-left">
              <Eye mouse={mouse} eyeX={710} eyeY={580} size={22} />
            </div>
            <div className="eye-wrap grape-eye-right">
              <Eye mouse={mouse} eyeX={748} eyeY={585} size={22} />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
