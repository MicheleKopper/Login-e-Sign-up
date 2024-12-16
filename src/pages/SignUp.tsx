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

export function SignUp() {
  return (
    <Box
      component={"form"}
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
              <FormControl fullWidth>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail*"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </FormControl>
            </Grid2>

            <Grid2 xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="password"
                  name="password"
                  label="Password*"
                  variant="outlined"
                  type="password"
                  size="small"
                  fullWidth
                />
              </FormControl>
            </Grid2>

            <Grid2 xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="repeatPassword"
                  name="repeatPassword"
                  label="Repeat Password*"
                  variant="outlined"
                  size="small"
                  fullWidth
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
