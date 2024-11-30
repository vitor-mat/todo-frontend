import { FC, createContext, useState, Dispatch, SetStateAction } from "react";

interface IUser {
  photoUrl: string;
  name: string;
  userId: string;
}

const mockUser = { photoUrl: "", name: "", userId: "" };

export const UserContext = createContext<{
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}>({ user: mockUser, setUser: () => {} });

export const UserProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState<IUser>(mockUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
