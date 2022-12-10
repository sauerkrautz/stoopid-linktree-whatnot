import { useQuery, useMutation, isError } from "react-query";
import { LoginProps } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/fetchers/User";
import { DOMAttributes, FormEvent, FormEventHandler, useState } from "react";
import { BeatLoader } from "react-spinners";
import User from "../User";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";

const Login = ({ credentials, setCredentials, setUser }: LoginProps) => {
  //   const { data, isLoading, isSuccess } = useQuery("login", login(credentials), {
  //     staleTime: 120000,
  //   });

  const { isLoading, isError, mutate } = useMutation("login", login);

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined | null>(null);

  const navigate = useNavigate();

  // const handleLogin = async (e: any) => {
  //   e.preventDefault();

  //   setIsLoading(true);

  //   const userData = await axios.post("/login", credentials, {
  //     withCredentials: true,
  //   });

  //   setUser(userData.data);
  //   setCredentials({ email: "", password: "" });

  //   sessionStorage.setItem("user", JSON.stringify({ user: userData.data }));

  //   console.log({ status: userData.status, statustext: userData.statusText });

  //   if (userData.status !== 200) {
  //     setIsLoading(false);
  //     setIsError(true);
  //   }

  //   console.log({ axiosStatusText: userData.statusText });

  //   if (
  //     userData.status === 200 &&
  //     userData.data &&
  //     userData.data.role === "admin"
  //   ) {
  //     return navigate("users");
  //   } else if (userData.data.role !== "admin") {
  //     return navigate("user");
  //   } else return navigate("/");
  // };

  // const {data} = useQuery('login', handleLogin, {staleTime: 90000})
  // const { isLoading, data, isSuccess, mutateAsync } = useMutation(
  //   "login",
  //   handleLogin
  // );

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    mutate(credentials, {
      onError(error, variables, context) {
        console.log({ error, variables, context });
        // setError(error.response?.data.msg);
      },
      onSuccess(user, variables, context) {
        switch (user.role) {
          case "admin":
            navigate("users");
            break;
          case "user":
            navigate("user");
            break;
          default:
            navigate("user");
        }
      },
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#252525] flex justify-center items-center">
      <form
        className="flex flex-col gap-8 p-8 bg-[#353535] rounded-lg"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-8">
          <input
            className="px-4 py-2 rounded-lg"
            placeholder="email"
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <div className="flex flex-col gap-2">
            <input
              className="px-4 py-2 rounded-lg"
              placeholder="password"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <Link to="/signup" className="text-slate-600">
              Doestn't have an account?{" "}
              <span className="text-white font-bold">signup </span>{" "}
            </Link>
          </div>
        </div>
        <button type="submit" className="text-xl text-white font-bold">
          {isLoading && !isError ? (
            <BeatLoader loading={isLoading} color={"#ffffff"} size={"1rem"} />
          ) : (
            "sign in"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
