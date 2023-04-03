import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Meme = () => {
  const [memes, setMemes] = useState({});
  const loadMeme = async () => {
    const res = await fetch(process.env.REACT_APP_MEME_API_LINK);
    const data = await res.json();
    setMemes(data);
  };
  useEffect(() => {
    // random meme
    loadMeme();
  }, []);

  //   reload meme
  const reloadMeme = () => {
    setMemes({});
    loadMeme();
  };

  // remove query string from url
  const imgUrl = memes.url?.split("?")[0];

  const downloadImage = () => {
    fetch(imgUrl, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "image/jpeg",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        // create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));

        // create a link to download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "meme.jpg"); //or any other extension
        link.click();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {memes?.url ? (
        <>
          <Typography
            variant="h4"
            component="h4"
            color={"#6096B4"}
            align="center"
            fontWeight={"bold"}
            fontFamily={"Alkatra"}
            style={{ marginBottom: "30px" }}
            gutterBottom
          >
            Meme Shooter
          </Typography>

          <img
            style={{ width: "95%", margin: "30px auto", display: "block" }}
            src={imgUrl}
            alt=""
          ></img>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#BDCDD6",
                color: "#000",
                fontWeight: "bold",
                fontFamily: "Alkatra",
                display: "block",
                margin: "20px auto",
              }}
              onClick={downloadImage}
            >
              Download
            </Button>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#BDCDD6",
                color: "#000",
                fontWeight: "bold",
                fontFamily: "Alkatra",
                display: "block",
                margin: "20px auto",
              }}
              onClick={reloadMeme}
            >
              Next Meme 🤣 🤣 🤣
            </Button>
          </div>
        </>
      ) : (
        <Typography
          variant="h1"
          component="h1"
          style={{ marginBottom: "30px" }}
        >
          🤣
        </Typography>
      )}
    </div>
  );
};

export default Meme;
