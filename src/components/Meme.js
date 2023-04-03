import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";

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

  function downloadMeme(url) {
    fetch(url, {
      mode: "no-cors",
    })
      .then((response) => response.blob())
      .then((blob) => {
        let blobUrl = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.download = url.replace(/^.*[\\\/]/, "");
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }
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
            onClick={() => downloadMeme(memes.url)}
          >
            Download This Meme
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Meme;
