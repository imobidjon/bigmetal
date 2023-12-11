import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./aboutCompanySecond.css";
import AboutImage from "../../../../assets/AboutCompanySecondSectionImage.png";

export default function About() {
  return (
    <Box sx={{ py: 7, mb: 10, mt: 10 }}>
      <div className="container">
        <Grid container>
          <Grid item sx={12} sm={12} md={6}>
            <Typography
              fontWeight={"400"}
              fontSize={"32px"}
              lineHeight={"normal"}
              color={"#222222"}
              marginBottom={"1.5rem"}
            >
              Biz haqimizda
            </Typography>

            <Box
              sx={{
                mt: 6,
              }}
            >
              <Box>
                <Typography className="CustomTypography">
                  2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish
                  bozoriga kirib keldi va “metall prokatining ishonchli yetkazib
                  beruvchisi” maqomini ishonchli tarzda qo‘lga kiritdi.
                </Typography>
                <Typography className="CustomTypography pt-4">
                  5 yillik davr mobaynida kompaniyamiz shaffof ishbilarmonlik
                  obro'si, mijozlarga yo'naltirilganligi, moslashuvchan narx
                  siyosati va yaxshi xizmat ko'rsatuvchi ishonchli hamkor
                  sifatida o'zini namoyon etishga muvaffaq bo'ldi. Ayni paytda
                  korxona ko‘plab mahalliy va xorijiy metall buyumlar ishlab
                  chiqaruvchi korxonalar, jumladan, metallurgiya va tog‘-kon
                  sanoati korxonalari bilan hamkorlik aloqalarini yo‘lga
                  qo‘ygan.
                </Typography>
                <Typography className="CustomTypography pt-4">
                  2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish
                  bozoriga kirib keldi va “metall prokatining ishonchli yetkazib
                  beruvchisi” maqomini ishonchli tarzda qo‘lga kiritdi.
                </Typography>
                <Typography className="CustomTypography">
                  2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish
                  bozoriga kirib keldi va “metall prokatining ishonchli yetkazib
                  beruvchisi” maqomini ishonchli tarzda qo‘lga kiritdi.
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
