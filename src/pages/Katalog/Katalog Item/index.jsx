import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { KatalogArray } from "../../../KatalogArray";
import "./KatalogItem.css";

export default function KatalogItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [metal, setMetal] = useState(id);
  const [date, setDate] = useState(1);

  const handleChange = (e) => {
    navigate(`/katalog-item/${e.target.value}`);
    setMetal(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 6,
          }}
        >
          <FormControl>
            <Select
              sx={{
                border: " 0.8px solid #000",
                borderRadius: "8px",
                height: "43px",
                p: "8px",
                "&:hover": {
                  border: "none",
                },
                "&:focus": {
                  border: "none",
                },
              }}
              value={metal}
              onChange={handleChange}
            >
              {KatalogArray.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography sx={{display: {xs: 'none', md: 'block'}}}>16.12.2023</Typography>
          <FormControl sx={{display: {xs: 'none', md: 'block'}}}>
            <Select
              sx={{
                borderRadius: "8px",
                color: "#fff",
                height: "43px",
                p: "8px",
                background: "",
                "&:hover": {
                  border: "none",
                },
                "&:focus": {
                  border: "none",
                },
                backgroundColor: "#1950DD",
              }}
              value={date}
              onChange={handleChangeDate}
            >
              <MenuItem value={1}>Yangi</MenuItem>
              <MenuItem value={2}>Eski</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <Box sx={{ background: "#F4F7F8", py: 7 }}>
        <div className="container">
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
    </>
  );
}
