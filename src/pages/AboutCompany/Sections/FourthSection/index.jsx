import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./aboutCompanyFourth.css";
import HuaweiLogo from "../../../../assets/HuaweiLogo.png";

export default function Companies() {
  return (
    <div className="BgRectangleWrapper" style={{marginTop: '8rem'}} >
      <Box sx={{display: {xs: 'none', md: 'block'}}} className="BgRectangle"></Box >
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} sx={{justifyContent: {xs: 'center', md: 'normal'}, display: {xs: 'flex'}}}>
            <Box className={"CompaniesCard"} sx={{ mt: 15 }}>
              <Typography className="CompaniesCardHeaderText">
                Biz ishlagan tashkilotlar
              </Typography>
              <Typography className="CompaniesCardHeaderText2">
                We are trusted by these companies
              </Typography>
              <Typography className="CompaniesCardHeaderText3">
                Ushbu tashkilotlar bilan 10 yildan ortiq vaqt davomida birga o‘z
                faoliyatimizni yuritib kelmoqdamiz. hamkorlarimizning ishonchi
                faoliyatimizda eng muhim tayanch.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid
              container
              sx={{ mt: {xs: 2, md: 15} }}
              rowSpacing={5}
              textAlign={"end"}
              columns={{ md: 2, xs: 2 }}
            >
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={1}>
                <img
                  src={HuaweiLogo}
                  alt={"HUAWEI LOGO"}
                  style={{ maxWidth: "200px" }}
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
