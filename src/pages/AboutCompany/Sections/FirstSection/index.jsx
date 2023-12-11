import React from "react";
import "./aboutCompanyFirst.css";
import { Grid, Typography } from "@mui/material";

export default function index() {
  return (
    <div className="AboutBgImage">
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <Typography className="AboutHeaderText">
              Sizni kompaniyamiz veb-saytiga
              <br /> tashrif buyurganingizdan
              <br /> mamnunmiz!
            </Typography>
            <Typography className="AboutParagraphText">
              Biz bilan hamkorlik qilsangiz, siz uchun narxlar yanada
              qulaylashib boradi. Bizning maqsadimiz mijozlar ishonchini
              qozonish va ularga sifatli mahsulot yetkazib berish. Mahsulotlar
              va biz haqimizdagi ma’lumotlar quyida kengroq berilgan. Biz siz
              bilan ishlashdan mamnunmiz !
            </Typography>
          </Grid>
        </Grid>
        <div className="AboutFirstWrapper">
          <div className="AboutFirstCard">
            <Typography className="AboutFirstCardText"> 50.000 t</Typography>
            <Typography className="AboutFirstCardParagraph">
              {" "}
              Yillik mahsulot aylanmasi
            </Typography>
          </div>
          <div className="AboutFirstCard">
            <Typography className="AboutFirstCardText">185 t</Typography>
            <Typography className="AboutFirstCardParagraph">
              Kunlik mahsulot aylanmasi
            </Typography>
          </div>
          <div className="AboutFirstCard">
            <Typography className="AboutFirstCardText">3000 t</Typography>
            <Typography className="AboutFirstCardParagraph">
              Hozirda sotuvda mavjud
            </Typography>
          </div>
        </div>
        {/* <Grid container justifyContent="space-evenly" display={"flex"}>
          <Grid textAlign={"center"} item xs={6} sm={6} md={4}>
            <div className="AboutFirstCard">
              <Typography className="AboutFirstCardText"> 50.000 t</Typography>
              <Typography className="AboutFirstCardParagraph">
                {" "}
                Yillik mahsulot aylanmasi
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="AboutFirstCard">
              <Typography className="AboutFirstCardText">185 t</Typography>
              <Typography className="AboutFirstCardParagraph">
                Kunlik mahsulot aylanmasi
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="AboutFirstCard">
              <Typography className="AboutFirstCardText">3000 t</Typography>
              <Typography className="AboutFirstCardParagraph">
                Hozirda sotuvda mavjud
              </Typography>
            </div>
          </Grid>
        </Grid> */}
      </div>
    </div>
  );
}
