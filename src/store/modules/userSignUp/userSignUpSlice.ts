import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users } from "../../../mock/users";

// Crie uma action signup no Redux para salvar os dados do usuário.
// Configure o Redux-Persist para manter os dados entre recarregamentos.

// Nome
// Valor inicial
// Ações (functions/reducer)

interface SignUpRequest {
  email: string;
  password: string;
  repeatPassword: string;
}

interface InitialState {
  id: string;
  email: string;
  password: string;
  errors: string;
}

const initialState: InitialState = {
  id: "",
  email: "",
  password: "",
  errors: "",
};

const userSignUpSlice = createSlice({
  name: "userSignUp",
  initialState: initialState,
  reducers: {
    signup(state, action: PayloadAction<SignUpRequest>) {
      const { email, password, repeatPassword } = action.payload;

      // Verifica se o e-mail já está registrado | userFound = busca por usuários
      const userFound = users.find((user) => user.email === email);

      if (userFound) {
        state.errors = "User already exists!";
        return state;
      }

      // Verifica se as senhas são iguais
      if (password !== repeatPassword) {
        state.errors = "Passwords are not the same!";
        return state;
      }

    },
  },
});

export const { signup } = userSignUpSlice.actions;
export const userLoggedReducer = userSignUpSlice.reducer;
