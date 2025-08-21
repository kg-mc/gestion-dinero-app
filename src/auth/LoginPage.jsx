import { useState } from "react";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
const Login = () => {
  const [option, setOption] = useState(true);
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className=" flex-1 max-w-[380px] border-2 border-amber-50 box-content">
          <h1 className="text-white text-5xl mb-7  flex justify-center mt-7">
            Bienvenido
          </h1>
          {option && (
            <LoginComponent className="bg-sky-300 " setOption={setOption} />
          )}
          {!option && (
            <RegisterComponent className="bg-sky-300 " setOption={setOption} />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
