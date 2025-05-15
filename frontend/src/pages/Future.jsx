import React from "react";
import { Box, Typography } from "@mui/material";

const Future = () => {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Future of E-Commerce
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
        E-commerce is evolving rapidly with 3D models, augmented reality,
        virtual try-ons, and immersive shopping experiences. Here's a 3D
        T-shirt model embedded from Sketchfab to showcase how future
        products might be previewed.
      </Typography>

      <Box sx={{ width: "100%", maxWidth: "800px", height: "500px" }}>
        <iframe
          title="T-shirt"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          width="100%"
          height="100%"
          src="https://sketchfab.com/models/7c8a4dede482474fa5a74f24c6fc5e81/embed"
        ></iframe>
        <Typography
          variant="caption"
          sx={{
            fontSize: 13,
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/t-shirt-7c8a4dede482474fa5a74f24c6fc5e81?utm_medium=embed&utm_campaign=share-popup&utm_content=7c8a4dede482474fa5a74f24c6fc5e81"
            target="_blank"
            rel="noopener noreferrer nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            T-shirt
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/Hyperrealitystudio?utm_medium=embed&utm_campaign=share-popup&utm_content=7c8a4dede482474fa5a74f24c6fc5e81"
            target="_blank"
            rel="noopener noreferrer nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Hyperrealitystudio
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7c8a4dede482474fa5a74f24c6fc5e81"
            target="_blank"
            rel="noopener noreferrer nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </Typography>
      </Box>

    </Box>
  );
};

export default Future;
