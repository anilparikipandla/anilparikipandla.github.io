import React, {useState} from "react";

export const Context = React.createContext();
export const ContextProvider = ({children})=>{
    const [date, setDate] = useState(new Date());

    return (
        <Context.Provider value={{date, setDate}}>
            {children}
        </Context.Provider>
    );
};
