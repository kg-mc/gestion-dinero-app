import { useEffect, useState } from "react";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "react-router-dom";

const LoginComponent = ({ setOption }) => {
  const { SignIn, /*  signUp, */ loading, user } = useAuth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  //
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  //
  if (loading) return <div>Cargando...</div>;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((valor_previo) => ({
      ...valor_previo,
      [name]: value,
    }));
  };
  const handleSubmitInput = async (e) => {
    console.log("El usuario es", inputValue);
    e.preventDefault();
    const { error } = await SignIn({
      email: inputValue.email,
      password: inputValue.password,
    });
    if (error) {
      console.error("Error al iniciar sesión:", error);
      console.log(user);
      return;
    }
    console.log("Sesion iniciada");
    navigate("/dashboard");

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
  const handleRegister = (e) => {
    e.preventDefault();
    setOption(false);
  };
  return (
    <>
      <div className=" bg-cyan-950 p-7 rounded-md shadow-lg text-white w-full">
        <form onSubmit={handleSubmitInput} className="flex flex-col gap-4">
          <label htmlFor="email">Usuario</label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500"
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
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
            className="boder-2 border-black rounded-md p-2 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300"
            disabled={loading}
          >
            Iniciar sesion
          </button>
        </form>

        <p className="text-center mt-4">
          Aun no estas registrado?{" "}
          <button className="text-amber-200" onClick={handleRegister}>
            Registrarse
          </button>
        </p>
      </div>
    </>
  );
};

export default LoginComponent;
