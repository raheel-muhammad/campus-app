import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

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
      sx={{
        marginTop: "5px !important",
        width: "99% !important",
        padding: { xs: "6px", sm: "16px" },
      }}
    >
      {data.map((item, index) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card
              sx={{
                minWidth: { md: "0px", lg: "275" },
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: { xs: "17px", sm: "20px" },
                    paddingBottom: "10px",
                    color: "#7433ff",
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#7433ff",
                  }}
                >
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
