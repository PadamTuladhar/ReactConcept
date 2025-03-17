//creating a context

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

//create global state that can receive component as a child

export default function GlobalState({ children }) {
    const [theme, setTheme] = useState('light');
    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    )
}