import React, { createContext, useState } from "react";

interface IUserInfoContext {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

interface IUserInfoContextProvider {
  children: React.ReactNode;
}

export const UserInfoContext = createContext<IUserInfoContext | null>(null);

const UserInfoContextProvider = ({ children }: IUserInfoContextProvider) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;
