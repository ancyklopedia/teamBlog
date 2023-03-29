import React from "react";
import { auth } from "../../firebaseConfig";
import { Typography, Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { NavbarProps } from "../../helpers/interfaces";

const UserPage: React.FC<NavbarProps> = ({ loggedIn }) => {
  return (
    <>
      {loggedIn && auth.currentUser && (
        <>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "2rem",
              my: "1rem",
              borderBottom: " 1px solid #1976d2",
              pb: ".5rem",
            }}
          >
            Your profile
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontSize: "1rem", my: "1rem" }}
          >
            {auth.currentUser.email}
          </Typography>
          <Button
            variant="outlined"
            sx={{ display: "block", mx: "auto", my: "1rem" }}
            onClick={() => signOut(auth)}
          >
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default UserPage;