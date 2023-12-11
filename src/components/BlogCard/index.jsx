import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./blogCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function BlogCard({ img, title, date, paragraph }) {
  return (
    <Box className={"BlogCard"}>
      <Box className={"BlogCardImage"}>
        <img src={img} alt={title} width={"100%"} />
      </Box>
      <Box className={"BlogCardDate"}>
        <AccessTimeIcon />
        <Typography className="BlogCardDateText">{date}</Typography>
      </Box>
      <Box>
        <Typography className="BlogCardTitle">{title}</Typography>
      </Box>
      <Box>
        <Typography className="BlogCardParagraph">{paragraph}</Typography>
      </Box>
      <Box className={"BlogCardButton w-100"}>
        <Button
        fullWidth
          sx={{
            borderRadius: "4px",
            background: "#323750",
            "&:hover": {
              background: "#383b49",
            },
          }}
          variant="contained"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                d="M1 5.16699C3.4 -0.166341 10.6 -0.166341 13 5.16699"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7.83398C6.73736 7.83398 6.47728 7.78225 6.23463 7.68174C5.99198 7.58123 5.7715 7.43392 5.58579 7.2482C5.40007 7.06248 5.25275 6.842 5.15224 6.59935C5.05173 6.3567 5 6.09663 5 5.83398C5 5.57134 5.05173 5.31127 5.15224 5.06862C5.25275 4.82597 5.40007 4.60549 5.58579 4.41977C5.7715 4.23405 5.99198 4.08673 6.23463 3.98623C6.47728 3.88572 6.73736 3.83398 7 3.83398C7.53043 3.83398 8.03914 4.0447 8.41421 4.41977C8.78929 4.79484 9 5.30355 9 5.83398C9 6.36442 8.78929 6.87313 8.41421 7.2482C8.03914 7.62327 7.53043 7.83398 7 7.83398Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Batafsil
        </Button>
      </Box>
    </Box>
  );
}
