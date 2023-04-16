import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="flex flex-col  items-center bg-white ">
      <div className="px-8 py-5 absolute top-60 rounded-md border border-gray-300">
        <h1 className="text-2xl font-bold mb-5">Sign-in</h1>
        <form action="#">
          <h5 className="mb-1 text-base">E-mail</h5>
          <input
            type="text"
            className="mb-5 py-2 w-[300px] bg-white border "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="mb-1 text-base">Password</h5>
          <input
            type="password"
            className=" mb-5 py-2 w-full bg-white border "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              onClick={signIn}
              className="bg-black border-2 px-16 py-2 w-full border-black text-white font-bold rounded-md mb-4 cursor-pointer hover:bg-white hover:text-black transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-5 text-sm text-center">
          No Account? Create a new one.
        </p>
        <button
          onClick={register}
          className="bg-white border-2 w-full border-black text-black font-bold rounded-md mt-2 px-5 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300"
        >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
