import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

interface props {
  uuid: string;
  key: string;
  value: string;
}

interface socials {
  uuid: string;
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  discord: string;
  whatsapp: string;
}

const Social = ({ key, value, uuid }: props) => {
  const [social, setSocial] = useState<socials>({
    uuid: uuid,
    facebook: "",
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    discord: "",
    whatsapp: "",
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const queryClient = useQueryClient();

  //   const { mutate, isSuccess, isLoading } = useMutation({
  //     mutationFn: () => {
  //       return handleSocialUpdate;
  //     },
  //   });

  //   const handleSocialUpdate = () => {
  //     mutate(social, {
  //       onSettled: () => {
  //         queryClient.invalidateQueries(["socials"]);
  //       },
  //     });
  //   };

  return (
    <div className="w-1/2 bg-[#151515] rounded-lg px-2 py-1 flex justify-between">
      {`${key}:`}
      {isEditing ? (
        <>
          <input
            type="text"
            name="text"
            id="text"
            value={value}
            onChange={(e) =>
              setSocial((prev) => {
                return { ...prev, facebook: e.target.value };
              })
            }
          />
        </>
      ) : (
        <a href={value}>{value}</a>
      )}
      <button>udpate</button>
    </div>
  );
};

export default Social;
