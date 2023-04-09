import React, {createContext, useContext, useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import isEqual from "react-fast-compare";
import {useQuery} from "@apollo/client";
import {HELLO_USER} from "../server/gql/user.gql";
import LoadingPage from "../components/common/loading/LoadingPage";

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

    const userContext = useContext(UserContext);
    const [cookie] = useCookies(["jwt-auth-token"]);
    const skip = userContext.user !== undefined || isEqual(cookie, {});
    const [user, setUser] = useState<UserType | null>(null);
    const [onCompleted, setOnCompleted] = useState<Boolean>(skip);

    useQuery(HELLO_USER, {
        skip: skip,
        onCompleted: (data) => {
            if (data && data.helloUser) {
                const user: UserType = {
                    id: data.helloUser.id,
                    username: data.helloUser.username,
                    email: data.helloUser.email,
                };

                setUser(user);
            }

            setOnCompleted(true);
        },
        onError: (error) => {
            setOnCompleted(true);
        }
    });

    if (!onCompleted) {
        return <LoadingPage />
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            {onCompleted && children}
        </UserContext.Provider>
    );
}