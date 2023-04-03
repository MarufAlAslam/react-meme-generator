import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Meme from "../../components/Meme";

const Main = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "#EEE9DA",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color={"#6096B4"}
        align="center"
        fontWeight={"bold"}
        fontFamily={"Alkatra"}
        gutterBottom
      >
        Meme Generator
      </Typography>

      <Meme />
    </Container>
  );
};

export default Main;
