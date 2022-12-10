import axios from "axios";
import { SocialProviders } from "../../../types/types";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

export const deleteSocial = async (uuid: string) => {
  const update = axios.patch("/socials", { uuid });
  const updated = await update;

  return updated.status;
};


export const udpateSocial = async (socials: SocialProviders) => {
  try {
    const social = axios.patch("/socials", socials )
    return (await social).status
  } catch (error: any) {
    throw new Error(error)
  }

}