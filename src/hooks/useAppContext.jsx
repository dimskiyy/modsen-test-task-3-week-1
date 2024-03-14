import { createContext, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("App context must be with appContextProvider");
    }

    return context;
};

export default AppContext;
