import { Box, Typography } from "@mui/material";
import React from "react";
import './style.css'

export default function TopMahsulotlar() {
  return (
    <Box sx={{ background: "#F4F7F8", py: 7 }} >
      <div className="container">
        <Typography
          fontWeight={"400"}
          sx={{
            fontSize: {xs: '22px', md: '32px'},
            textAlign: {xs: 'center', md: 'start'}
          }}
          lineHeight={"normal"}
          color={"#222222"}
          marginBottom={'1.5rem'}
        >
          TOP mahsulotlar
        </Typography>

        <table className="table text-center">
          <thead>
            <tr>
              <th>Nomi</th>
              <th className="d-none d-lg-table-cell">Temir markasi</th>
              <th className="d-none d-lg-table-cell">Uzunligi</th>
              <th>Narxi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Armatura</td>
              <td className="d-none d-lg-table-cell">A500C/35Gs</td>
              <td className="d-none d-lg-table-cell">12</td>
              <td>9 400 000 uzs</td>
            </tr>
            <tr>
              <td>Armatura</td>
              <td className="d-none d-lg-table-cell">A500C/35Gs</td>
              <td className="d-none d-lg-table-cell">12</td>
              <td>9 400 000 uzs</td>
            </tr>
            <tr>
              <td>Armatura</td>
              <td className="d-none d-lg-table-cell">A500C/35Gs</td>
              <td className="d-none d-lg-table-cell">12</td>
              <td>9 400 000 uzs</td>
            </tr>
            <tr>
              <td>Armatura</td>
              <td className="d-none d-lg-table-cell">A500C/35Gs</td>
              <td className="d-none d-lg-table-cell">12</td>
              <td>9 400 000 uzs</td>
            </tr>
            <tr>
              <td>Armatura</td>
              <td className="d-none d-lg-table-cell">A500C/35Gs</td>
              <td className="d-none d-lg-table-cell">12</td>
              <td>9 400 000 uzs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
}
