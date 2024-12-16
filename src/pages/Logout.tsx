import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/modules/userLogged/userLoggedSlice";
import { Button, Typography } from "@mui/material";

export function Logout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  function handleLogout() {
    // disparar logout
    dispatch(logout());
  }

  useEffect(() => {
    if (!userLoggedRedux.id) {
      // Navego pro login
      navigate("/login");
    }
  }, [userLoggedRedux, navigate]);

  return (
    <>
      <Typography variant="h6">Welcome, {userLoggedRedux.name}</Typography>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}