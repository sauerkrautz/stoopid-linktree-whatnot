import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { BeatLoader } from "react-spinners";
import { handleSocial } from "../utils/Helpers";
import { getUser } from "../utils/fetchers/User";
import { useMutation, useQuery, useQueryClient } from "react-query";

import ReactModal from "react-modal";

import "../index.css";
import LinkIcon from "./LinkIcon";
import { udpateSocial } from "../utils/fetchers/Socials";

const SocialInterface = () => {
  // query client
  const queryClient = useQueryClient();

  // states
  const [input, setInput] = useState("");
  const [socialProviders, setSocialProviders] = useState<string[]>([
    "facebook",
    "instagram",
    "github",
    "linkedin",
    "twitter",
    "whatsapp",
  ]);

  // react queries
  const {
    isLoading: isMutating,
    isError,
    isSuccess,
    mutate,
  } = useMutation("socialupdate", udpateSocial, {
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(["user", "users"]);
    },
  });

  const { data, isLoading } = useQuery("socials", getUser, {
    optimisticResults: true,
  });

  // handle functions
  const handleSocialUpdate = (e: FormEvent, key: string) => {
    e.preventDefault();
    console.log({ e });
    mutate({ [key]: input } as any, {
      onError(error, variables, context) {
        console.log({ error, success: false });
      },
      onSettled(data, error, variables, context) {
        setInput("");
        queryClient.invalidateQueries(["socialproviders"]);
      },
    });
  };

  if (isLoading) {
    return <BeatLoader size={"1rem"} color="#ffffff" loading={isLoading} />;
  } else {
    return (
      <>
        <div className="max-w-full flex gap-6 px-8">
          {socialProviders.map((e: string, i: number) => {
            return (
              <div className="w-2/12 h-1/2 bg-white rounded-lg  ">
                <button className="p-8 flex justify-center items-center w-full cursor-pointer focus:rounded-lg">
                  <LinkIcon socialProvider={e} />
                </button>

                {/* <form
                  className="flex flex-col h-full w-full gap-4 bg-[#252525] rounded-lg p-8 "
                  onSubmit={(form) => handleSocialUpdate(form, social)}
                >
                  <input
                    type="url"
                    name="social"
                    id=""
                    value={input}
                    className="bg-white rounded-lg"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInput(e.target.value)
                    }
                  />
                </form> */}
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default SocialInterface;
