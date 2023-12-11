import React from "react";
import "./aboutCompanyThird.css";
import { Box, Grid, Typography } from "@mui/material";
import CardHeaderImage from "../../../../assets/CardHeader.png";
import CardFooterImage from "../../../../assets/AboutCompanyCardFooter.png";

export default function index() {
  return (
    <div className="ThirdWrapper">
      <div className="LineWrapper">
        <div className="line">
          <div className="dotsWrapper">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <Grid container columnSpacing={30}>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={"ThirdCard"}>
              <Box className={"ThirdCardHeader"}>
                <img
                  src={CardHeaderImage}
                  alt={"CardHeaderImage"}
                  width={"100%"}
                  style={{ maxWidth: "228px" }}
                />
                <Typography className={"ThirdCardText"}>STRATEGIYA</Typography>
              </Box>
              <Box className={"ThirdCardBody"}>
                <Typography className={"ThirdCardTitle"}>
                  Bizning strategiya
                </Typography>
                <Typography className={"ThirdCardParagraph"}>
                  Bizning strategiyamiz, mijozlar bilan savdo aloqalarini
                  yaxshilash va ularga sifatli xizmat ko‘rsatishni
                  bosqichma-bosqich yangilash
                </Typography>
              </Box>
              <Box className={"ThirdCardFooter"}>
                <img
                  src={CardFooterImage}
                  alt={"CardFooterImage"}
                  width={"100%"}
                  style={{ maxWidth: "100px" }}
                />
                <div className={"ThirdCardFooterCenterRed"}></div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={"ThirdCard"}>
              <Box className={"ThirdCardHeader"}>
                <img
                  src={CardHeaderImage}
                  alt={"CardHeaderImage"}
                  width={"100%"}
                  style={{ maxWidth: "228px" }}
                />
                <Typography className={"ThirdCardText"}>MAQSAD</Typography>
              </Box>
              <Box className={"ThirdCardBody"}>
                <Typography className={"ThirdCardTitle"}>
                  Bizning strategiya
                </Typography>
                <Typography className={"ThirdCardParagraph"}>
                  Bizning strategiyamiz, mijozlar bilan savdo aloqalarini
                  yaxshilash va ularga sifatli xizmat ko‘rsatishni
                  bosqichma-bosqich yangilash
                </Typography>
              </Box>
              <Box className={"ThirdCardFooter"}>
                <img
                  src={CardFooterImage}
                  alt={"CardFooterImage"}
                  width={"100%"}
                  style={{ maxWidth: "100px" }}
                />
                <div className={"ThirdCardFooterCenterRed"}></div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={"ThirdCard"}>
              <Box className={"ThirdCardHeader"}>
                <img
                  src={CardHeaderImage}
                  alt={"CardHeaderImage"}
                  width={"100%"}
                  style={{ maxWidth: "228px" }}
                />
                <Typography className={"ThirdCardText"}>MISSIYA</Typography>
              </Box>
              <Box className={"ThirdCardBody"}>
                <Typography className={"ThirdCardTitle"}>
                  Bizning strategiya
                </Typography>
                <Typography className={"ThirdCardParagraph"}>
                  Bizning strategiyamiz, mijozlar bilan savdo aloqalarini
                  yaxshilash va ularga sifatli xizmat ko‘rsatishni
                  bosqichma-bosqich yangilash
                </Typography>
              </Box>
              <Box className={"ThirdCardFooter"}>
                <img
                  src={CardFooterImage}
                  alt={"CardFooterImage"}
                  width={"100%"}
                  style={{ maxWidth: "100px" }}
                />
                <div className={"ThirdCardFooterCenterRed"}></div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
