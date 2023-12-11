import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FirstPageImage from "../../../../assets/FirstPageImage.png";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";

export default function FirstSection() {
  return (
    <Box
      className="container"
      sx={{ marginTop: {xs: '2rem', md: '7rem'}, marginBottom: "4rem" }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            fontFamily={"Libre Franklin"}
            fontWeight={"600"}  
            sx={{
              fontSize: { xs: "30px", md: "48px" },
              letterSpacing: { xs: 0, md: "3px" },
              lineHeight: { xs: "normal", md: "58.18px" },
              textAlign: {xs: 'center', md: 'start'},
            }}
            color={"#222222"}
          >
            Har qanday sharoitda metallarni biz bilan oson topasiz
          </Typography>
          <Typography
            fontFamily={"Libre Franklin"}
            fontWeight={"400"}
            sx={{
              fontSize: { xs: "15px", md: "20px" },
              letterSpacing: { xs: 4, md: "1.6px" },
              lineHeight: { xs: "normal", md: "24.24px" },
              textAlign: {xs: 'center', md: 'start'}

            }}
            color={"#6e6e6e"}
            marginTop={"3rem"}
          >
            Metallarni siz xohlagan miqdorda va siz xohlagan <br /> sifatda
            yetkazib bera olamiz
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ textAlign: "end" }}>
            <img
              src={FirstPageImage}
              alt="FirstPageImage"
              width={"100%"}
              style={{ maxWidth: "500px", maxHeight: "388.35px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <NavLink to="/katalog" className={"text-decoration-none"}>
        <Button variant="outlined" sx={{width: {xs: '100%', md: '300px'}}} endIcon={<LoginIcon />}>
          Mahsulotlarni ko‘rish
        </Button>
      </NavLink>
    </Box>
  );
}
