import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import LockIcon from "@mui/icons-material/Lock";

export function Login() {
  /* Alerta para botões sem destino */
  function handleImplements() {
    alert("Not implementeds!");
  }

  return (
    <Box
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
              <TextField
                id="email"
                label="E-mail*"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid2>

            <Grid2 xs={12}>
              <TextField
                id="password"
                label="Password*"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid2>

            {/* Checkbox */}
            <Grid2 xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                sx={{ color: "#758694" }}
              />
            </Grid2>

            {/* Enter */}
            <Grid2 xs={12}>
              <Button variant="contained" fullWidth onClick={handleImplements}>
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
