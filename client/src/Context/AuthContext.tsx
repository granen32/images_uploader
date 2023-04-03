import * as React from "react";
import { createContext, useState } from "react";
import { UserProp, UserProps } from "../types/user";

export const AuthContext = createContext<UserProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [me, setMe] = useState<UserProp>({
    sessionId: "",
    name: "",
    userId: "",
  });
  return (
    <AuthContext.Provider value={{ setMe, me }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
