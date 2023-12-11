import React, { useState } from "react";
import { BlogCard } from "../../components";
import BlogImg from "../../assets/blogImage.jpg";
import { Grid, Switch, Typography } from "@mui/material";

export default function Blogs() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="container my-5">
      <Switch defaultChecked checked={checked} onChange={handleChange} />

      {checked ? (
        <Grid container rowSpacing={2}>
          <Grid item sx={12} sm={6} md={4}>
            <BlogCard
              img={BlogImg}
              title={
                "Dvuxtavr mahsulotlariga 10 foizgacha chegirma e’lon qilindi"
              }
              date={"27 nov. 2023"}
              paragraph={`Ushbu mahsulotlarimizga chegirma faqat yanvar oyi uchun amal qiladi. Bundan foydalanib qoling`}
            />
          </Grid>
          <Grid item sx={12} sm={6} md={4}>
            <BlogCard
              img={BlogImg}
              title={
                "Dvuxtavr mahsulotlariga 10 foizgacha chegirma e’lon qilindi"
              }
              date={"27 nov. 2023"}
              paragraph={`Ushbu mahsulotlarimizga chegirma faqat yanvar oyi uchun amal qiladi. Bundan foydalanib qoling`}
            />
          </Grid>
          <Grid item sx={12} sm={6} md={4}>
            <BlogCard
              img={BlogImg}
              title={
                "Dvuxtavr mahsulotlariga 10 foizgacha chegirma e’lon qilindi"
              }
              date={"27 nov. 2023"}
              paragraph={`Ushbu mahsulotlarimizga chegirma faqat yanvar oyi uchun amal qiladi. Bundan foydalanib qoling`}
            />
          </Grid>
        </Grid>
      ) : (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '55vh'
        }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.20)",
              fontFamily: " Libre Franklin",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Bloglar tez orada qo‘shiladi{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_1_2445)">
                <path
                  d="M16 30.8569C19.9403 30.8569 23.7193 29.2916 26.5056 26.5053C29.2918 23.7191 30.8571 19.9401 30.8571 15.9997C30.8571 12.0594 29.2918 8.28039 26.5056 5.49413C23.7193 2.70788 19.9403 1.14258 16 1.14258C12.0596 1.14258 8.28063 2.70788 5.49438 5.49413C2.70812 8.28039 1.14282 12.0594 1.14282 15.9997C1.14282 19.9401 2.70812 23.7191 5.49438 26.5053C8.28063 29.2916 12.0596 30.8569 16 30.8569Z"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.45715 18.2859C9.60001 22.4002 14.1714 24.9145 18.2857 23.7716C20.8 22.8573 22.8572 20.8002 23.5429 18.2859M10.9714 12.4573C10.8199 12.4573 10.6745 12.3971 10.5674 12.2899C10.4602 12.1828 10.4 12.0374 10.4 11.8859C10.4 11.7343 10.4602 11.589 10.5674 11.4818C10.6745 11.3747 10.8199 11.3145 10.9714 11.3145C11.123 11.3145 11.2683 11.3747 11.3755 11.4818C11.4827 11.589 11.5429 11.7343 11.5429 11.8859C11.5429 12.0374 11.4827 12.1828 11.3755 12.2899C11.2683 12.3971 11.123 12.4573 10.9714 12.4573ZM21.0286 12.4573C20.877 12.4573 20.7317 12.3971 20.6245 12.2899C20.5174 12.1828 20.4572 12.0374 20.4572 11.8859C20.4572 11.7343 20.5174 11.589 20.6245 11.4818C20.7317 11.3747 20.877 11.3145 21.0286 11.3145C21.1801 11.3145 21.3255 11.3747 21.4326 11.4818C21.5398 11.589 21.6 11.7343 21.6 11.8859C21.6 12.0374 21.5398 12.1828 21.4326 12.2899C21.3255 12.3971 21.1801 12.4573 21.0286 12.4573Z"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2445">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Typography>
        </div>
      )}
    </div>
  );
}
