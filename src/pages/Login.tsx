import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

interface ErrorFields {
  email?: string;
  password?: string;
}

export function Login() {
  /* Alerta para botões sem destino */
  function handleImplements() {
    alert("Not implementeds!");
  }

  // VALIDAÇÃO EMAIL E SENHA
  const [errors, setError] = useState<ErrorFields>({
    email: "",
    password: "",
  });

  function validate(email: string, password: string) {
    if (!email) {
      setError({ email: "E-mail is required" });
      return;
    }

    if (!password) {
      setError({ password: "Password is required" });
      return;
    }

    setError({});
  }

  function hendleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget["email"].value;
    const password = event.currentTarget["password"].value;
    const remember = event.currentTarget["remember"].checked;

    validate(email, password);

    console.log({ email, password, remember });
  }

  return (
    <Box
      component={"form"}
      onSubmit={hendleLogin}
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
          height: "70%",
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
              <Avatar sx={{ bgcolor: "#D91656", margin: "0 auto" }}>
                <LockIcon />
              </Avatar>

              <Typography variant="h5" sx={{ marginTop: 2 }}>
                Sign in
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
                  error={!!errors.email}
                  helperText={errors.email}
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
                  size="small"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password}
                  onChange={(e) => {
                    if (e.target.value) {
                      setError({ ...errors, password: "" });
                    }
                  }}
                />
              </FormControl>
            </Grid2>

            {/* Checkbox */}
            <Grid2 xs={12}>
              <FormControlLabel
                name="remember"
                control={<Checkbox />}
                label="Remember me"
                sx={{ color: "#758694" }}
              />
            </Grid2>

            {/* Enter */}
            <Grid2 xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Enter
              </Button>
            </Grid2>

            {/* Link de Registro */}
            <Grid2 xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <a href="#" onClick={handleImplements}>
                  Register
                </a>
              </Typography>
            </Grid2>

            {/* Copyright */}
            <Grid2 xs={12} sx={{ textAlign: "center", marginTop: 4 }}>
              <Typography variant="caption" color={"#758694"}>
                Copyright ©{" "}
                <a href="#" onClick={handleImplements}>
                  Michele Kopper
                </a>
                , 2024
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  );
}
