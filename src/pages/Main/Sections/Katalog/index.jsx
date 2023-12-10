import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { KatalogCard } from "../../../../components";
import Dvuxtavr from "../../../../assets/Dvuxtavr.png";
import Shveller from "../../../../assets/Shveller.png";
import Ugalok from "../../../../assets/Ugalok.png";
import Truba from "../../../../assets/Truba.png";
import Shveller2 from "../../../../assets/Shveller 2.png";
import Armatura from "../../../../assets/Armatura.png";
import KvadratProfil from "../../../../assets/Kvadrat profil.png";
import KvadratPrut from "../../../../assets/Kvadrat prut.png";
import Prut from "../../../../assets/Prut.png";
import LoginIcon from "@mui/icons-material/Login";

export default function Katalog() {
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
          Katalog
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 9, md: 10 }}
        >
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Dvuxtavr} text={"Dvuxtavr"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Shveller} text={"Shveller"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Ugalok} text={"Ugalok"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Truba} text={"Truba"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Shveller2} text={"Shveller"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Armatura} text={"Armatura"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={KvadratProfil} text={"Kvadrat profil"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={KvadratPrut} text={"Kvadrat prut"} />
          </Grid>
          <Grid item xs={2} sm={3} md={2}>
            <KatalogCard image={Prut} text={"Prut"} />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
          <Button
            variant="contained"
            sx={{
              background: "#323750",
              p: "13px 30px",
              "&:hover": {
                backgroundColor: "#535561",
              },
            }}
            endIcon={<LoginIcon />}
          >
            Katalogga o'tish
          </Button>
        </Box>
      </div>
    </Box>
  );
}
