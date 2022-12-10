// interface props {
//     setUser: (obj: any) => void
// }

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSessionUser = (callback?: any) => {
  const user = JSON.parse(sessionStorage.getItem("user") as any)?.user;
  const navigate = useNavigate();
  callback ? callback(user) : null;
  // useEffect(() => {
  //   user?.role === "admin"
  //     ? navigate("userlist")
  //     : user?.role === "user"
  //     ? navigate("user")
  //     : navigate("/");
  // }, []);

  return user;
};

export default useSessionUser;
