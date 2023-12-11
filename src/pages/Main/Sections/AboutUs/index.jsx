import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./about.css";
import AboutImage from "../../../../assets/AboutUs.png";

export default function About() {
  return (
    <Box sx={{ py: 7, mb:10 }}>
      <div className="container">
        <Typography
          fontWeight={"400"}
          sx={{
            fontSize: {xs: '22px', md: '32px'},
            textAlign: {xs: 'center', md: 'start'}
          }}
          lineHeight={"normal"}
          color={"#222222"}
          marginBottom={"1.5rem"}
        >
          Biz haqimizda
        </Typography>

        <Grid container>
          <Grid item sx={12} sm={12} md={6}>
            <Box
              sx={{
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: {xs: '50px', md: '100px'}
              }}
            >
              <Box>
                <Typography className="CustomTypography">
                  2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish
                  bozoriga kirib keldi va “metall prokatining ishonchli yetkazib
                  beruvchisi” maqomini ishonchli tarzda qo‘lga kiritdi.
                </Typography>
                <Typography className="CustomTypography pt-3">
                  5 yillik davr mobaynida kompaniyamiz shaffof ishbilarmonlik
                  obro'si, mijozlarga yo'naltirilganligi, moslashuvchan narx
                  siyosati va yaxshi xizmat ko'rsatuvchi ishonchli hamkor
                  sifatida o'zini namoyon etishga muvaffaq bo'ldi. Ayni paytda
                  korxona ko‘plab mahalliy va xorijiy metall buyumlar ishlab
                  chiqaruvchi korxonalar, jumladan, metallurgiya va tog‘-kon
                  sanoati korxonalari bilan hamkorlik aloqalarini yo‘lga
                  qo‘ygan.
                </Typography>
              </Box>
              <Box>
                <Typography className="CustomTypography">
                  2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish
                  bozoriga kirib keldi va “metall prokatining ishonchli yetkazib
                  beruvchisi” maqomini ishonchli tarzda qo‘lga kiritdi.
                </Typography>
                <Typography className="CustomTypography pt-3">
                  5 yillik davr mobaynida kompaniyamiz shaffof ishbilarmonlik
                  obro'si, mijozlarga yo'naltirilganligi, moslashuvchan narx
                  siyosati va yaxshi xizmat ko'rsatuvchi ishonchli hamkor
                  sifatida o'zini namoyon etishga muvaffaq bo'ldi. Ayni paytda
                  korxona ko‘plab mahalliy va xorijiy metall buyumlar ishlab
                  chiqaruvchi korxonalar, jumladan, metallurgiya va tog‘-kon
                  sanoati korxonalari bilan hamkorlik aloqalarini yo‘lga
                  qo‘ygan.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sx={12} sm={12} md={6}>
            <Box sx={{ textAlign: "end" }}>
              <img
                src={AboutImage}
                alt="AboutImage"
                width={"100%"}
                style={{ maxWidth: "489px", borderRadius: "5px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
