import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UrlImageDownloader from "react-url-image-downloader";

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

          <UrlImageDownloader imageUrl={memes.url} />

          <Button
            variant="contained"
            style={{
              backgroundColor: "#BDCDD6",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Alkatra",
              display: "block",
              margin: "60px auto 20px auto",
            }}
            onClick={reloadMeme}
          >
            Next Meme 🤣 🤣 🤣
          </Button>
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
