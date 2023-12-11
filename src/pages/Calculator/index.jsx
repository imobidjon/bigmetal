import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { KatalogCard } from "../../components";
import { KatalogArray } from "../../KatalogArray";
import { NavLink } from "react-router-dom";

export default function Calculator() {
  const [olchov, setOlchov] = useState(1);
  const [nisbat, setNisbat] = useState(1);

  return (
    <Box sx={{ py: 7 }}>
      <div className="container">
        <Typography
          fontWeight={"400"}
          fontSize={"32px"}
          lineHeight={"normal"}
          color={"#222222"}
          marginBottom={"1.5rem"}
        >
          Kalkulyator
        </Typography>
      </div>

      <Box sx={{ background: "#F4F7F8", mt: 8, py: 8 }}>
        <div className="container">
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 9, md: 10 }}
          >
            {KatalogArray.map((item) => {
              return (
                <Grid item key={item.id} xs={2} sm={3} md={2}>
                  <NavLink
                    to={`/katalog-item/${item.id}`}
                    className={"text-decoration-none"}
                  >
                    <KatalogCard
                      bg={"#fff"}
                      image={item.image}
                      text={item.text}
                    />
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>

      <Box sx={{ my: 4, display: "flex", alignItems: "center" }}>
        <div className="container">
          <FormControl>
            <label>O'lchov</label>
            <Select
              sx={{
                borderRadius: "8px",
                height: "43px",
                p: "8px",
                width: "250px",
                "&:hover": {
                  border: "none",
                },
                "&:focus": {
                  border: "none",
                },
                mr: 10,
              }}
              value={olchov}
              onChange={(e) => setOlchov(e.target.value)}
            >
              <MenuItem value={1}>O'lchov bo'yicha</MenuItem>
              <MenuItem value={2}>Turi bo'yicha</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <label>Nisbat</label>

            <Select
              sx={{
                borderRadius: "8px",
                height: "43px",
                width: "250px",
                p: "8px",
                background: "",
                "&:hover": {
                  border: "none",
                },
                "&:focus": {
                  border: "none",
                },
              }}
              value={nisbat}
              onChange={(e) => setNisbat(e.target.value)}
            >
              <MenuItem value={1}>Yangi</MenuItem>
              <MenuItem value={2}>Eski</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <Divider sx={{ borderWidth: "2px" }} />
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
            mb: 8,
          }}
        >
          <Box>
            <InputLabel>Diametr D, mm</InputLabel>
            <TextField
              defaultValue={"0"}
              sx={{
                ".MuiInputBase-root": {
                  height: "43px",
                  border: "0.5px solid #222",
                  borderRadius: "8px",
                },
                '& fieldset': {
                    border: 'none'
                }
              }}
            />
          </Box>
          <Box>
            <InputLabel>Uzunligi, m</InputLabel>
            <TextField
              defaultValue={"0"}
              sx={{
                ".MuiInputBase-root": {
                  height: "43px",
                  border: "0.5px solid #222",
                  borderRadius: "8px",
                },
                '& fieldset': {
                    border: 'none'
                }
              }}
            />
          </Box>
          <Box>
            <InputLabel>Armatura og‘irligi</InputLabel>
            <TextField
              defaultValue={"0"}
              sx={{
                ".MuiInputBase-root": {
                    background: '#1950DD',
                  height: "43px",
                  border: "none",
                  borderRadius: "8px",
                  color: '#fff'
                },
                '& fieldset': {
                    border: 'none'
                }
              }}
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
