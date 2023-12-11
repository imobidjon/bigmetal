import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { KatalogCard } from "../../components";
import { KatalogArray } from "../../KatalogArray";
import { NavLink } from "react-router-dom";

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
                  <NavLink to={`/katalog-item/${item.id}`} className={"text-decoration-none"}>
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
    </Box>
  );
}
