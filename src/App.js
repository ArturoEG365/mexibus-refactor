import React from "react";
import LoginForm from "./components/Login/formulario";
import background from "./images/contact-bg.png";
import logo from "./images/logo-mexi.jpg";

const App = () => {
  const handleLogin = (credentials) => {
    console.log("Credenciales enviadas:", credentials);
    // Aquí podrías llamar a una API o manejar el inicio de sesión.
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
      <img src={logo} alt="Logo" className="App-logo" />
      <LoginForm onSubmit={handleLogin} />
      </header>
    </div>
  );
};

export default App;
