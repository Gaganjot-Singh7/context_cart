import { createContext, useContext } from "react";


export const Context=createContext();


export const useCart=()=>{
    return useContext(Context);
}