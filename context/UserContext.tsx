// INFO USER 
import React, { createContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  zoo_name: string;
  country: string;
  state: string;
  city: string;
  address: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
