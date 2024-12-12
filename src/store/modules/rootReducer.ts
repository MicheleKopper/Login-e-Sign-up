import { combineReducers } from "@reduxjs/toolkit";
import { userLoggedReducer } from "./userLogged/userLoggedSlice";

// Todos os novos estados globais criados, devem ser chamados aqui
export const rootReducer = combineReducers({
  userLogged: userLoggedReducer,
});