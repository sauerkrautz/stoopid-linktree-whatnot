import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { LoginProps, RegisterProps } from "../../../types/types";

const Register = () => {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<any>();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      setStatus("loading");
      const data = axios.post("/user", credentials);
      const user = await data;
      console.log({ data: user, status: user.status, header: user.headers });
      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setErrors(error.response.data.msg);
      console.log({ msg: error.response.data.msg });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-2 bg-[#252525] flex justify-center items-center">
      <p className="text-xl text-white">
        {status === "error"
          ? errors
          : status === "success"
          ? "user registered"
          : null}
      </p>
      <form className="flex flex-col gap-8" onSubmit={handleRegister}>
        <input
          className="px-4 py-2 rounded-lg"
          type="text"
          name="text"
          id="text"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          className="px-4 py-2 rounded-lg"
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className="px-4 py-2 rounded-lg"
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit" className="text-xl text-white font-bold">
          {status === "loading" ? (
            <BeatLoader
              loading={status === "loading"}
              color={"#ffffff"}
              size={"1rem"}
            />
          ) : (
            "sign up"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
