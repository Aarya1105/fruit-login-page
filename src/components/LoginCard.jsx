import { motion } from "framer-motion";

export default function LoginCard({
  email,
  setEmail,
  password,
  setPassword,
  activeField,
  setActiveField,
  showPassword,
  setShowPassword,
  emailError,
}) {
  return (
    <motion.div
      className="login-card"
      initial={{ opacity: 0, x: 50, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Welcome back!</h2>
      <p>Please enter your details to access the dashboard.</p>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="text"
          placeholder="estel@orchard.com"
          value={email}
          onFocus={() => setActiveField("email")}
          onBlur={() => setActiveField(null)}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span className="error-text">{emailError}</span>}
      </div>

      <div className="form-group">
        <div className="label-row">
          <label>Password</label>
          <span className="forgot">Forgot?</span>
        </div>

        <div className="password-wrap">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onFocus={() => setActiveField("password")}
            onBlur={() => setActiveField(null)}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="peek-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
      </div>

      <div className="remember-row">
        <input type="checkbox" id="remember" defaultChecked />
        <label htmlFor="remember">Remember for 30 days</label>
      </div>

      <motion.button
        className="continue-btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue →
      </motion.button>

      <div className="signup-text">
        Don&apos;t have an account? <span>Sign up for free</span>
      </div>
    </motion.div>
  );
}
