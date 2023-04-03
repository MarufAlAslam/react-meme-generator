import { Button } from "@mui/material";
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
  return (
    <div>
      {memes?.url ? (
        <>
          <img
            src={memes.url}
            style={{
              maxWidth: "95%",
              margin: "auto",
              display: "block",
              marginBottom: "30px",
            }}
            alt={memes.title}
          />

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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Meme;
