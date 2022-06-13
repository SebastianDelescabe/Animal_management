import { createContext } from "react";

//I create context because need setAnimals refresh data when update form finish, and i can't access whit father children react props 
export const AnimalContext = createContext()