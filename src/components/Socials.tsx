import React, { useEffect, useState } from "react";

import { BeatLoader } from "react-spinners";
import { useQuery, useQueryClient } from "react-query";
import { getUser } from "../utils/fetchers/User";
import { handleSocial } from "../utils/Helpers";

const Socials = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("socialproviders", getUser, {
    refetchOnMount: true,
    retryOnMount: true,
    onSettled(data, error) {
      queryClient.invalidateQueries(["socialproviders"]);
    },
  });

  const [social, setSocial] = useState<any>([]);

  useEffect(() => {
    if (isLoading) {
      return;
    } else {
      const socials = handleSocial(data);
      setSocial(socials);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return <BeatLoader size={"1rem"} color="#ffffff" loading={isLoading} />;
  } else {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center rounded-lg text-white ">
        {social !== null
          ? social.map(([key, value]: any, i: number) => {
              return (
                <div>
                  {`${key}:`}
                  <a href={value}>{value}</a>
                </div>
              );
            })
          : "you have no social medias"}
      </div>
    );
  }
};

export default Socials;
