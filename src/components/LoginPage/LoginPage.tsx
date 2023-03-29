import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 100, textAlign: "center", my:"1.5rem" }}>
        Hello!
      </Typography>
      <LoginForm />
      <Typography variant="h6" sx={{ fontWeight: 100, textAlign: "center", my:"1.5rem" }}>
        Don't have an account yet? Register now!
      </Typography>
      <Link to="/register" style={{textDecoration: 'none'}}>
        <Button variant="outlined" size="large" color="secondary" sx={{ display: "block", mx: "auto" }}>
          Register
        </Button>
      </Link>
    </>
  );
};

export default LoginPage;