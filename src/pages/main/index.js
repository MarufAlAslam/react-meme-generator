import { Container } from "@mui/material";
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
      <Meme />
    </Container>
  );
};

export default Main;
