import React, {createContext, useState} from 'react';

type UserContextProviderProps = {
    children: React.ReactNode
}

export type UserType = {
    id: number
    username: string
    email: string
}

type UserContextType = {
    user: UserType | null,
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

export const UserContext = createContext<UserContextType>({} as UserContextType); 

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<UserType | null>(null);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}