import { Dispatch, SetStateAction } from "react";

export interface UserProp {
  sessionId: string;
  name: string;
  userId: string;
}

export type UserProps = {
  me: UserProp;
  setMe: Dispatch<SetStateAction<UserProp>>;
};
