import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="flex flex-col items-center bg-white h-screen">
      <Link to="/">
        <div className="border-2 border-black bg-black rounded-full mt-25 mb-20 hover:rotate-360 transition-all duration-300">
          <div className="border-2 border-white bg-black rounded-full">
            <img
              className="border-dashed m-15 bg-black border-2 h-80 w-80 rounded-full object-contain"
              src={""}
              alt=""
            />
          </div>
        </div>
      </Link>
      <div className="w-300 rounded-lg border-1 border-lightgray p-20">
        <h1 className="font-medium mb-20">Sign-in</h1>
        <form action="#">
          <h5 className="mb-5">E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-30 mb-10 bg-white w-98"
          />

          <h5 className="mb-5">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-30 mb-10 bg-white w-98"
          />
          <button
            type="submit"
            // onClick={signIn}
            className="bg-black border-2 border-black text-white font-bold rounded-lg h-30 w-full mt-10 cursor-pointer hover:bg-white hover:text-black transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-15 text-sm">
          By signing-in you agree to all of the Condition of Use & Sale. Please
          see our Privacy Notice, our cookies Notice and Interest-Based Ads
          Notice.
        </p>
        <button
          //   onClick={register}
          className="bg-white border-2 border-black text-black font-bold rounded-lg w-full h-30 mt-10 cursor-pointer hover:bg-black hover:text-white transition duration-300"
        >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
