import React from "react";
import "./fifthSection.css";
import { Box, Typography } from "@mui/material";

export default function FifthSection() {
  return (
    <div className="bgImage">
      <div className="container">
        <Typography className="bgImageText">
          Mahsulotlarni istalgan vaqtda qulay narxda <br />“ BIG METALL “ dan
          toping
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: '40px',
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background:
                "linear-gradient(90deg, #FEC601 0%, #FFF4CD 30.93%, #FEC601 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "4px solid #fff",
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                flexDirection: 'column'
              }}
            >
                <Typography className="GoldHeader"> 10</Typography>
                <Typography className="GoldParagraph">tonnagacha bepul yetkazib berish</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "6px solid #FEC601",
              position: "absolute",
              zIndex: -1,
              top: '-50px',
              width: "400px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}></Box>
        </Box>
      </div>
    </div>
  );
}
