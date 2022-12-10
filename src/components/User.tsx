import { useQuery } from "react-query";
import { getUser } from "../utils/fetchers/User";
import { BeatLoader } from "react-spinners";

interface socials {
  [key: string]: string | number;
}

interface UserProps {
  socials: socials | any;
  setSocials: (obj: any) => void;
}

const User = () => {
  const { isLoading, data, isError } = useQuery("user", getUser, {
    optimisticResults: true,
    refetchInterval: 100,
  });

  if (isLoading) {
    return <BeatLoader size={"1rem"} color={"#ffffff"} loading={isLoading} />;
  } else {
    return (
      <div className="w-full h-full rounded-lg text-white flex flex-col justify-center items-center ">
        <p>{data.username}</p>
        <p>{data.email}</p>
      </div>
    );
  }
};

export default User;
