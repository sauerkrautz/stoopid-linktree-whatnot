import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { handleSocial } from "../utils/Helpers";
import { useQuery } from "react-query";
import { getUserByUsername } from "../utils/fetchers/User";
import { motion } from "framer-motion";
import LinkIcon from "./LinkIcon";

const Linktree = () => {
  const { id } = useParams();
  // const queryClient = useQueryClient();
  console.log(id);

  const { data, isLoading, isError, status } = useQuery(
    "linktree",
    () => {
      return getUserByUsername(id);
    },
    {
      optimisticResults: true,
    }
  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  console.log({ user: data, isError, status });

  const [social, setSocial] = useState<any>([]);

  useEffect(() => {
    if (isLoading && !isError) {
      return;
    } else {
      const socials = handleSocial(data);
      setSocial(socials);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <BeatLoader size={"1rem"} color="#151515" loading={isLoading} />
      </div>
    );
  } else if (!isLoading && !isError) {
    return (
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center rounded-lg  ">
        <div className="w-1/2 h-1/4 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            className="flex justify-center items-center w-32 h-32 rounded-full bg-[#151515] transition-all duration-100 "
          >
            <p className="text-3xl text-white">{data.username.charAt(0)}</p>
          </motion.div>
          <p className="font-extrabold text-xl">{data.email}</p>
        </div>
        <div className="w-1/2 flex flex-col gap-4 items-center">
          {social !== null
            ? social.map(([key, value]: any, i: number) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transitionDelay: `${i * 50}ms`,
                    }}
                    className="rounded-lg text-white justify-center items-center flex gap-2 w-1/2 h-16 bg-[#151515] "
                  >
                    <a href={value} target="_blank">
                      <div className="w-full  rounded-lg ">
                        <div className="text-4xl">
                          <LinkIcon socialProvider={key} />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })
            : "you have no social medias"}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen bg-[#151515] text-white ">
        <div>
          <p>User Not Found</p>
        </div>
      </div>
    );
  }
};

export default Linktree;
