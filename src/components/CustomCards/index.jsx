import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { style } from "./style";

const Cards = () => {
  const data = [
    { name: "Total Jobs", value: 3213 },
    { name: "Posted Jobs", value: 4123 },
    { name: "Applied Jobs", value: 545 },
    { name: "Verified-Users", value: 5342 },
    { name: "Non-Verified-Users", value: 4321 },
    { name: "Blocked-Users", value: 33 },
  ];
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={style.grid}
    >
      {data.map((item, index) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={style.card}>
              <CardContent>
                <Typography sx={style.para}>{item.name}</Typography>

                <Typography variant="body2" sx={style.body}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards;
