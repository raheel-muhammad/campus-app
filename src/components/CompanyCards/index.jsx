import * as React from "react";
import Card from "@mui/material/Card";
import { Button, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { style } from "./style";
import CustomModal from "../../components/Modal";

const StdCards = ({ children }) => {
  const [open, setOpen] = React.useState(false);
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
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Box sx={style.MainCard}>
        {data.map((item, index) => {
          return (
            <>
              <Card sx={style.card}>
                <CardContent sx={style.cardDiv}>
                  <Box
                    sx={style.cardSubDiv}
                    component={"img"}
                    src={
                      "//vendfrontendassets.freetls.fastly.net/images/setup/set-up-outlets-v3.svg"
                    }
                    alt="Mountain"
                  />
                  {item.name}
                  <Typography> company@company.com</Typography>
                  <Button sx={style.submitBtn} onClick={handleClick}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </>
          );
        })}
        <CustomModal
          open={open}
          setOpen={setOpen}
          title="Confirm"
          paragraph="Do you really want to apply?"
          confirmButtonText="Yes, apply"
        />
      </Box>
    </>
  );
};
export default StdCards;
