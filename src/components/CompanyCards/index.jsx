import * as React from "react";
import Card from "@mui/material/Card";
import { Button, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";

const StdCards = () => {
  const data = [
    { name: "Apple" },
    { name: "Amazon" },
    { name: "Microsoft" },
    { name: "SpaceX" },
    { name: "Facebook(Meta)" },
    { name: "Tesla" },
    { name: "Google" },
    { name: "Twitter" },
    { name: "Netflix" },
    { name: "IBM" },
    { name: "Oracle" },
    { name: "Intel" },
    { name: "Ford" },
    { name: "Cisco System" },
    { name: "Walmart" },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          margin: "30px",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => {
          return (
            <>
              <Card
                sx={{
                  maxWidth: 360,
                  background: "#fff",
                  color: "#000",
                }}
              >
                <CardContent sx={{ fontWeight: 600, fontSize: "20px" }}>
                  <Box
                    sx={{ width: "100%", display: "flex" }}
                    component={"img"}
                    src={
                      "//vendfrontendassets.freetls.fastly.net/images/setup/set-up-outlets-v3.svg"
                    }
                    alt="Mountain"
                  />
                  {item.name}
                  <Typography> company@company.com</Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default StdCards;
