import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FirstPageImage from "../../../../assets/FirstPageImage.png";
import LoginIcon from '@mui/icons-material/Login';

export default function FirstSection() {
  return (
    <div className="container" style={{ marginTop: "7rem", marginBottom: '4rem' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            fontFamily={"Libre Franklin"}
            fontWeight={"600"}
            fontSize={"48px"}
            lineHeight={"58.18px"}
            letterSpacing={"3px"}
            color={"#222222"}
          >
            Har qanday sharoitda metallarni biz bilan oson topasiz
          </Typography>
          <Typography
            fontFamily={"Libre Franklin"}
            fontWeight={"400"}
            fontSize={"20px"}
            lineHeight={"24.24px"}
            letterSpacing={"1.6px"}
            color={"#6e6e6e"}
            marginTop={'3rem'}
          >
            Metallarni siz xohlagan miqdorda va siz xohlagan <br /> sifatda yetkazib
            bera olamiz
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ textAlign: 'end' }}>
            <img
              src={FirstPageImage}
              alt="FirstPageImage"
              width={"100%"}
              style={{ maxWidth: "500px", maxHeight: "388.35px" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Button variant="outlined" endIcon={<LoginIcon />} >Mahsulotlarni ko‘rish</Button>
    </div>
  );
}
