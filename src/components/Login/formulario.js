import React, { useState } from "react";
import "./formulario.css";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Limpiar errores y enviar datos
    setError("");
    onSubmit({ email, password });
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="submit-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
export default LoginForm;