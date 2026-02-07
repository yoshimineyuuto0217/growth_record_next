"use client";

import {
  createContext,
  ReactNode,
  useContext,
} from "react";

type User = {
  name: string;
  profile_image: string;
  self_introduction: string;
};

type UserContextType = {
  currentUser: User | null;
};

type ProvidersProps = {
  children: ReactNode;
  currentUser: User | null;
};

const userContext = createContext<UserContextType | null>(null);

export default function Providers({ children,currentUser }: ProvidersProps) {
  return (
    <userContext.Provider value={{ currentUser }}>
      {children}
    </userContext.Provider>
  );
}

export const useCurrentUser = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("ユーザー情報を使用する為のProviderが囲まれてません");
  }

  return context;
};