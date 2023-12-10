import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  return (
    <div
      className="container"
      style={{
        background: "#323750",
        borderRadius: "8px",
        color: "#fff",
        marginTop: "50px",
      }}
    >
      <Grid container sx={{ px: 15, py: 10 }}>
        <Grid item md={5}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Libre Franklin",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                ml: "45px",
              }}
            >
              Manzil
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", my: 3 }}>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M15.0186 24.8C15.2248 25.1187 15.5873 25.3312 15.9998 25.3312C16.4123 25.3312 16.7748 25.1187 16.9873 24.8L23.8748 14.1625C24.7998 12.7313 25.3373 11.1562 25.3373 9.33125C25.3311 4.05625 21.1873 0 15.9998 0C10.8123 0 6.66855 4.05625 6.66855 9.33125C6.66855 11.1562 7.20605 12.7313 8.13105 14.1625L15.0186 24.8ZM15.9998 4C18.9436 4 21.3311 6.3875 21.3311 9.33125C21.3311 12.275 18.9436 14.6625 15.9998 14.6625C13.0561 14.6625 10.6686 12.275 10.6686 9.33125C10.6686 6.3875 13.0561 4 15.9998 4ZM22.8373 20.2188L15.9998 29.3312L9.1623 20.2188C6.8248 21.4438 5.33105 23.275 5.33105 25.3312C5.33105 29.0125 10.1061 32 15.9998 32C21.8936 32 26.6686 29.0125 26.6686 25.3312C26.6686 23.275 25.1748 21.4438 22.8373 20.2188Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </svg>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontFamily: "Libre Franklin",
                  }}
                >
                  Toshkent shahri, Yunusobod tumani, <br /> Quruvchilar
                  mahllasi, Ashxobod ko‘chasi, <br /> 42-uy
                </Typography>

                <Button
                  variant="contained"
                  endIcon={<PinDropIcon />}
                  sx={{
                    background: "#1950DD",
                    fontFamily: "Libre Franklin",
                    boxShadow: "none",
                    borderRadius: "4px",
                    mt: 2,
                    "&:hover": {
                      backgroundColor: "#3364e2",
                    },
                  }}
                >
                  Xaritadan ko‘rish
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontFamily: "Libre Franklin",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                ml: "45px",
              }}
            >
              Bog'lanish uchun:
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", mt: 3 }}>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M3.5 3.5C3.5 20.5 11.5 28.5 28.5 28.5V20.5L21.5 18.5L19.5 21.5C15.5 21.5 10.5 16.5 10.5 12.5L13.5 10.5L11.5 3.5H3.5Z"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontFamily: "Libre Franklin",
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
            </Box>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                border: "1px solid #C0C0C0",
                borderRight: "none",
                left: 0,
                height: "363.5px",
                width: "76px",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                border: "1px solid #C0C0C0",
                borderLeft: "none",
                right: 0,
                height: "363.5px",
                width: "76px",
              }}
            ></Box>
            <Grid container columnSpacing={2} rowSpacing={3} paddingX={2}>
              <Grid item md={6} sx={{pt:0}}>
                <InputLabel sx={{ color: "#fff" }}>Ismingiz</InputLabel>
                <TextField
                  sx={{
                    background: "#fff",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <InputLabel sx={{ color: "#fff" }}>Telefon raqam</InputLabel>
                <TextField
                  sx={{
                    background: "#fff",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item md={12}>
                <InputLabel sx={{ color: "#fff" }}>Ma'lumot</InputLabel>
                <TextField
                  sx={{
                    background: "#fff",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                  rows={4}
                  multiline
                  placeholder="Menga metall list mahsulotlari kerak"
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    background: "#1950DD",
                    fontFamily: "Libre Franklin",
                    boxShadow: "none",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#3364e2",
                    },
                  }}
                >
                  Yuborish
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
