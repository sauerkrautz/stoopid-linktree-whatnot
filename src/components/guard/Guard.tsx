import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../App";
import useSessionUser from "../../hooks/useSessionUser";

const Guard = () => {
  const user: any = useSessionUser();
  // const navigate = useNavigate();

  // const { data, isLoading, isError } = useQuery("login", login, {
  //   staleTime: 90000000,
  // });

  return user ? <Outlet /> : <Navigate to={"/"} />;
};

export default Guard;
