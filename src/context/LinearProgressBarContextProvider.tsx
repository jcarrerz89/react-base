import React, {createContext, ReactNode, useState} from 'react';

type LinearProgressBarContextType = {
    display: boolean,
    show: React.DispatchWithoutAction
    hide: React.DispatchWithoutAction
}

export const LinearProgressBarContext = createContext<LinearProgressBarContextType>({} as LinearProgressBarContextType);

const LinearProgressBarContextProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [display, setDisplay] = useState(false);
    const show = () => {
        setDisplay(true);
    }
    const hide = () => {
        setDisplay(false);
    }

    return (
        <LinearProgressBarContext.Provider value={{display, show, hide}}>
            {children}
        </LinearProgressBarContext.Provider>
    );
}

export default LinearProgressBarContextProvider;