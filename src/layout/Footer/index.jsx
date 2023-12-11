import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Logo from "../../assets/logo.png";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ background: "#323750", pt: "40px", mt: 8 }}>
      <div className="container">
        <Grid container>
          <Grid item md={2}>
            <img
              src={Logo}
              alt={"Logo"}
              style={{ maxWidth: "100px" }}
              width={"100%"}
            />
          </Grid>
          <Grid item md={5}>
            <Box sx={{ display: "flex", color: "#fff" }}>
              <Box>
                <NavLink
                  to="/katalog"
                  className={" text-decoration-none text-white"}
                >
                  <Typography sx={{ my: 1, fontFamily: "Libre Franklin" }}>
                    Katalog
                  </Typography>
                </NavLink>
                <Typography sx={{ my: 1, fontFamily: "Libre Franklin" }}>
                  Kompaniya haqida
                </Typography>
                <Typography sx={{ my: 1, fontFamily: "Libre Franklin" }}>
                  Blog
                </Typography>
              </Box>
              <Box sx={{ ml: 10 }}>
                <Typography sx={{ my: 1, fontFamily: "Libre Franklin" }}>
                  Kalkulyator
                </Typography>
                <Typography sx={{ my: 1, fontFamily: "Libre Franklin" }}>
                  Kontaktlar
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", color: "#fff", mt: 7 }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Libre Franklin",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  <PhoneOutlinedIcon sx={{ mr: 1 }} />
                  Bog'lanish uchun:
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontFamily: "Libre Franklin",
                    mt: 3,
                  }}
                >
                  sarvarhakimov99@gmail.com
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.70)",
                    mt: 2,
                    fontFamily: "Libre Franklin",
                  }}
                >
                  +99 899 999 99 99
                </Typography>
              </Box>
              <Box sx={{ ml: 10, display: "flex", gap: "15px" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M15.9997 30.9336C14.0387 30.9336 12.0968 30.5473 10.285 29.7968C8.47321 29.0464 6.82697 27.9464 5.44028 26.5597C4.05359 25.173 2.95361 23.5268 2.20314 21.715C1.45267 19.9032 1.06641 17.9613 1.06641 16.0002C1.06641 14.0392 1.45267 12.0973 2.20314 10.2855C2.95361 8.47369 4.05359 6.82745 5.44028 5.44077C6.82697 4.05408 8.47321 2.9541 10.285 2.20363C12.0968 1.45316 14.0387 1.06689 15.9997 1.06689C19.9603 1.06689 23.7587 2.64022 26.5592 5.44077C29.3597 8.24131 30.9331 12.0397 30.9331 16.0002C30.9331 19.9608 29.3597 23.7591 26.5592 26.5597C23.7587 29.3602 19.9603 30.9336 15.9997 30.9336ZM15.9997 30.9336V13.8669C15.9997 12.7353 16.4493 11.6501 17.2494 10.8499C18.0496 10.0498 19.1348 9.60023 20.2664 9.60023H21.3331M10.6664 18.1336H21.3331"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M29.4464 3.46234C29.3258 3.35818 29.1791 3.28892 29.022 3.26205C28.865 3.23517 28.7035 3.2517 28.5552 3.30984L3.22267 13.2236C2.91455 13.3442 2.65386 13.5614 2.47975 13.8428C2.30564 14.1241 2.22752 14.4544 2.2571 14.7839C2.28669 15.1135 2.42239 15.4245 2.64384 15.6704C2.86528 15.9162 3.1605 16.0836 3.48517 16.1473L10.2502 17.4761V24.9998C10.2503 25.3486 10.3547 25.6894 10.5499 25.9785C10.7451 26.2676 11.0222 26.4917 11.3457 26.6222C11.6692 26.7526 12.0243 26.7834 12.3654 26.7106C12.7065 26.6378 13.0181 26.4647 13.2602 26.2136L16.5902 22.7598L21.7877 27.3161C22.105 27.5969 22.514 27.752 22.9377 27.7523C23.1227 27.7519 23.3066 27.7228 23.4827 27.6661C23.7714 27.5747 24.0312 27.4093 24.236 27.1862C24.4409 26.9632 24.5837 26.6903 24.6502 26.3948L29.7277 4.32109C29.7634 4.16591 29.756 4.00393 29.7065 3.8526C29.6569 3.70127 29.567 3.56634 29.4464 3.46234ZM3.75642 14.6711C3.75164 14.6582 3.75164 14.644 3.75642 14.6311C3.76207 14.6267 3.76841 14.6234 3.77517 14.6211L23.7389 6.80609L10.8264 16.0561L3.77517 14.6761L3.75642 14.6711ZM12.1802 25.1711C12.1457 25.2068 12.1014 25.2315 12.0529 25.242C12.0043 25.2525 11.9538 25.2482 11.9077 25.2299C11.8615 25.2115 11.8219 25.1798 11.7939 25.1388C11.7658 25.0979 11.7506 25.0495 11.7502 24.9998V18.5136L15.4614 21.7636L12.1802 25.1711ZM23.1889 26.0561C23.1797 26.0984 23.1593 26.1374 23.1298 26.169C23.1004 26.2007 23.0629 26.2239 23.0214 26.2361C22.9791 26.251 22.9336 26.2542 22.8896 26.2454C22.8456 26.2366 22.8048 26.2161 22.7714 26.1861L12.2052 16.9173L27.8752 5.68734L23.1889 26.0561Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M23.4664 7.46689H25.5997M9.59974 1.06689H22.3997C24.6629 1.06689 26.8334 1.96594 28.4337 3.56625C30.034 5.16656 30.9331 7.33705 30.9331 9.60023V22.4002C30.9331 24.6634 30.034 26.8339 28.4337 28.4342C26.8334 30.0345 24.6629 30.9336 22.3997 30.9336H9.59974C7.33656 30.9336 5.16607 30.0345 3.56576 28.4342C1.96545 26.8339 1.06641 24.6634 1.06641 22.4002V9.60023C1.06641 7.33705 1.96545 5.16656 3.56576 3.56625C5.16607 1.96594 7.33656 1.06689 9.59974 1.06689ZM15.9997 22.4002C14.3024 22.4002 12.6745 21.7259 11.4743 20.5257C10.274 19.3255 9.59974 17.6976 9.59974 16.0002C9.59974 14.3028 10.274 12.675 11.4743 11.4747C12.6745 10.2745 14.3024 9.60023 15.9997 9.60023C17.6971 9.60023 19.325 10.2745 20.5252 11.4747C21.7255 12.675 22.3997 14.3028 22.3997 16.0002C22.3997 17.6976 21.7255 19.3255 20.5252 20.5257C19.325 21.7259 17.6971 22.4002 15.9997 22.4002Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5}>
            <YMaps>
              <div style={{ borderRadius: "12px", width: "100%" }}>
                <Map
                  defaultState={{
                    center: [41.316835, 69.28092],
                    zoom: 17,
                  }}
                ></Map>
              </div>
            </YMaps>
          </Grid>
        </Grid>
        <Divider sx={{ border: "2px solid #fff", mt: 3, mb: 1 }} />
        <Typography textAlign={"center"} paddingBottom={"20px"} color={"#fff"}>
          Barcha huquqlar himoyalangan. “BIG METALL” 2023
        </Typography>
      </div>
    </Box>
  );
}
