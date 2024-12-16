import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/modules/userSignUp/userSignUpSlice";

interface ErrorFields {
  email?: string;
  password?: string;
  repeatPassword?: string;
}

export function SignUp() {
  // Dispatch - método do Store que envia a Action ao Reducer. O Dispatch é uma função que aceita uma ação, que é um objeto composto por um tipo e um payload de dados. O Dispatch chama o reducer com a ação e atualiza o estado.
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  // Estados para os inputs e erros
  const [errors, setError] = useState<ErrorFields>({
    email: "",
    password: "",
    repeatPassword: "",
  });

  // > Maior que | < Menor que
  // Função de validação
  function validate(email: string, password: string, repeatPassword: string) {
    // Validação do email = Deve conter @ , ser um email válido (gmail / hotmail/ outlook), ter no mínimo 3 caracteres antes do @
    if (!email) {
      setError({ email: "E-mail is required!" });
      return;
    }

    if (
      !email.includes("@") ||
      email.length < 3 ||
      (!email.endsWith("gmail.com") &&
        !email.endsWith("hotmail.com") &&
        !email.endsWith("outlook.com"))
    ) {
      setError({ email: "Incorrect email!" });
      return;
    }

    // Validação do senha = Não pode ser um conjunto de caracteres sequenciais ( exemplo : 1123456) . Além disso, para uma senha ser registrada deve conter mais de 4 caracteres.

    if (!password) {
      setError({ password: "Password is required!" });
      return;
    }

    if (password.length <= 4) {
      setError({ password: "Password must be longer than 4 characters!" });
      return;
    }

    const isSequential = (password: string) => {
      for (let i = 0; i < password.length - 1; i++) {
        if (password.charCodeAt(i) + 1 !== password.charCodeAt(i + 1)) {
          return false;
        }
      }
      return true;
    };

    if (isSequential(password)) {
      setError({ password: "Sequential characters prohibited!" });
      return;
    }

    // Confirmação da senha = Para garantir que a senha seja inserida corretamente, solicite aos usuários que a confirmem.
    if (password !== repeatPassword) {
      setError({ repeatPassword: "Passwords are not the same!" });
      return;
    }

    // Se não houver erros, limpa os erros
    setError({});
  }

  // Handle submit = envia os dados do validateForm para algum lugar
  function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget["email"].value;
    const password = event.currentTarget["password"].value;
    const repeatPassword = event.currentTarget["repeatPassword"].value;

    // Validação local
    if (password !== repeatPassword) {
      console.log("Passwords do not match!");
      return;
    }

    validate(email, password, repeatPassword);

    dispatch(signup({ email, password, repeatPassword }));
  }

  // Se existir as infos do usserLogged eu navego
  useEffect(() => {
    if (userLoggedRedux.id && !userLoggedRedux.errors) {
      navigate("/login");
    }
  }, [userLoggedRedux, navigate]);

  return (
    <Box
      component={"form"}
      onSubmit={handleSignUp}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#F8FAFC",
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "60%",
          height: "auto",
          overflow: "hidden",
        }}
        elevation={2}
      >
        {/* Grid Container Principal */}
        <Grid2 container sx={{ width: "100%" }}>
          {/* Coluna da Imagem */}
          <Grid2
            xs={6}
            sx={{
              backgroundImage: `url("https://picsum.photos/600/400")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Coluna do Formulário */}
          <Grid2
            container
            xs={6}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            sx={{ padding: 4 }}
          >
            {/* Ícone e Título */}
            <Grid2 xs={12} sx={{ textAlign: "center" }}>
              <Avatar sx={{ bgcolor: "#059212", margin: "0 auto" }}>
                <VerifiedUserIcon />
              </Avatar>
              <Typography variant="h5" sx={{ marginTop: 2 }}>
                Sign Up
              </Typography>
            </Grid2>

            {/* Inputs */}
            <Grid2 xs={12}>
              <FormControl fullWidth error={!!errors.email}>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail*"
                  variant="outlined"
                  size="small"
                  fullWidth
                  error={!!errors.email || !!userLoggedRedux.errors}
                  helperText={errors.email || userLoggedRedux.errors}
                  onChange={(e) => {
                    if (e.target.value) {
                      setError({ ...errors, email: "" });
                    }
                  }}
                />
              </FormControl>
            </Grid2>

            <Grid2 xs={12}>
              <FormControl fullWidth error={!!errors.password}>
                <TextField
                  id="password"
                  name="password"
                  label="Password*"
                  variant="outlined"
                  type="password"
                  size="small"
                  fullWidth
                  error={!!errors.password || !!userLoggedRedux.errors}
                  helperText={errors.password || userLoggedRedux.errors}
                  onChange={(e) => {
                    if (e.target.value) {
                      setError({ ...errors, password: "" });
                    }
                  }}
                />
              </FormControl>
            </Grid2>

            <Grid2 xs={12}>
              <FormControl fullWidth error={!!errors.repeatPassword}>
                <TextField
                  id="repeatPassword"
                  name="repeatPassword"
                  label="Repeat Password*"
                  variant="outlined"
                  type="password"
                  size="small"
                  fullWidth
                  error={!!errors.repeatPassword || !!userLoggedRedux.errors}
                  helperText={errors.repeatPassword || userLoggedRedux.errors}
                  onChange={(e) => {
                    if (e.target.value) {
                      setError({ ...errors, repeatPassword: "" });
                    }
                  }}
                />
              </FormControl>
            </Grid2>

            {/* Botão criar conta */}
            <Grid2 xs={12} sx={{ textAlign: "center" }}>
              <Button variant="outlined" disabled>
                Create Account
              </Button>
            </Grid2>

            {/* Já possui conta? */}
            <Grid2 xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                <a href="/login"> Already have an account? Go to login </a>
              </Typography>
            </Grid2>

            {/* Copyright */}
            <Grid2 xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="caption" color={"#758694"}>
                Copyright © <a href="#">Michele Kopper</a>, 2024
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  );
}
