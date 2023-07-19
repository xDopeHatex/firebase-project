import React, { createContext, ReactElement, useState } from "react";

type UserProviderPropsType = {
  children: ReactElement | ReactElement[];
};

type UserType = {};

type UserContextType = {
  currentUser: UserType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({
  children,
}: UserProviderPropsType): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<UserType | null>({ hay: "s" });
  const value: UserContextType = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
