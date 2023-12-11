import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { KatalogCard } from "../../../../components";
import LoginIcon from "@mui/icons-material/Login";
import { KatalogArray } from "../../../../KatalogArray";
import { NavLink } from "react-router-dom";

export default function KatalogSection() {
  return (
    <Box sx={{ py: 7 }}>
      <div className="container">
        <Typography
          fontWeight={"400"}
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            textAlign: { xs: "center", md: 'start' },
          }}
          lineHeight={"normal"}
          color={"#222222"}
          marginBottom={"1.5rem"}
        >
          Katalog
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 0}}
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 9, md: 10 }}
        >
          {KatalogArray.map((item) => (
            <Grid item xs={2} key={item.id} sm={3} md={2}>
              <NavLink
                to={`/katalog-item/${item.id}`}
                className={"text-decoration-none"}
              >
                <KatalogCard
                  bg={"#F4F7F8"}
                  image={item.image}
                  text={item.text}
                />
              </NavLink>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
          <NavLink to="/katalog" className={"text-decoration-none"}>
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
          </NavLink>
        </Box>
      </div>
    </Box>
  );
}
