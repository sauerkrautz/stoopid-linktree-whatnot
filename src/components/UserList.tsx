import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { getUser, getUsers } from "../utils/fetchers/User";
import { handleSocial } from "../utils/Helpers";
import { BeatLoader } from "react-spinners";

const UserList = () => {
  const { data, isLoading, isError } = useQuery("users", getUsers, {
    staleTime: 60000,
  });

  console.table(data);

  if (isError) return <div>error</div>;

  if (isLoading) {
    return <BeatLoader size={"1rem"} color={"#ffffff"} loading={isLoading} />;
  } else {
    return (
      <div className="w-full h-full rounded-lg text-white flex flex-col justify-center items-center ">
        {data.map((e: any, i: number) => {
          return (
            <div>
              <p>{e.username}</p>
              <p>{e.email}</p>
            </div>
          );
        })}
        {/* {socials?.map(([key, value], i) => {
          return <div>{`${key} : ${value}`}</div>;
        })} */}
      </div>
    );
  }
};

export default UserList;
