import { useState } from "react";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const { SignUp, loading, user } = useAuth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
  });

  //
  if (loading) return <div>Cargando...</div>;
  if (user) {
    // Si el usuario ya está autenticado, redirigir a la página de dashboard
    navigate("/dashboard");
  }
  //

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((valor_previo) => ({
      ...valor_previo,
      [name]: value,
    }));
  };
  const handleSubmitInput = (e) => {
    e.preventDefault();
    const { error } = SignUp({
      email: inputValue.email,
      password: inputValue.password,
      options: {
        data: {
          name: inputValue.name,
          lastname: inputValue.lastname,
        },
      },
    });
    if (error) {
      console.error("Error al registrarse:", error);
      return;
    }
    console.log("Registro exitoso");

    /* if (inputValue.user !== "" && inputValue.password !== "") {
      console.log("Usuario:", inputValue.user);
      console.log("Contraseña:", inputValue.password);
      if (inputValue.user == "klein" && inputValue.password == "1234") {
        console.log("Login exitoso");
        login(inputValue);
        navigate("/dashboard");
      }
    } */
  };
  return (
    <>
      <div className=" bg-cyan-950 p-7 rounded-md shadow-lg text-white w-full">
        <form onSubmit={handleSubmitInput} className="flex flex-col gap-4">
          <label htmlFor="name">Nombres</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
            type="text"
            id="name"
            name="name"
            placeholder="Juancito Pepelucho"
            onChange={handleInput}
          />
          <label htmlFor="apellidos">Apellidos</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
            type="text"
            id="apellidos"
            name="apellidos"
            placeholder="Quispe Mamani"
            onChange={handleInput}
          />
          <label htmlFor="email">Correo electrónico</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
            type="email"
            id="email"
            name="email"
            placeholder="elvengadordelfuturo@chimail.com"
            onChange={handleInput}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            onChange={handleInput}
          />

          <button
            className="boder-2 border-black rounded-md p-2 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 mt-3"
            disabled={loading}
          >
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
