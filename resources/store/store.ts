import {Timer} from "./Timer";
import {createContext, useContext} from "react";
import {Pages} from "./Pages";


const store = {
    timer: new Timer(),
    pages:new Pages()
    // "game":new Game()
};

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext<typeof store>(StoreContext);
};

export default store;