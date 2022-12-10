// import { instance } from "../axios";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

export const getUsers = async () => {
  const users = await axios.get("/users");
  return users.data;
};

export const login = async ({ email, password }: any) => {
  try {
    const user = await axios.post(
      "/login",
      { email, password },
      {
        withCredentials: true,
      }
    );
    sessionStorage.setItem("user", JSON.stringify({ user: user.data }));
    return user.data;
  } catch (error: any) {
    console.log({ error, origin: "login async funtion" });
    throw new Error(error);
  }

  // localStorage.setItem(
  //   "accessToken",
  //   JSON.stringify({ accessToken: user.data.accessToken })
  // );
};

export const logout = async () => {
  sessionStorage.clear();
  document.cookie = "";
  return await axios.delete("/logout");
};

export const getUser = async () => {
  const user = await axios.get("/user");

  return user.data;
};

export const getUserByUsername = async (params: string | undefined) => {
  try {
    const user = await axios.get(`/user/${params}`);

    return user.data;
  } catch (error: any) {
    throw new Error(error.response.data.msg);
  }
};
