import React from "react";
import Stack from "@mui/system/Stack";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MyPaper from "./MyPaper";
import { useTheme } from "@mui/material";
import { data1, data2, data3, data4 } from "./data";
import TrafficIcon from "@mui/icons-material/Traffic";

const FirstSection = () => {
  const MUITheme = useTheme();
  return (
    <Stack gap={1}>
      <Stack direction="row" gap={1} flexWrap="wrap">
        <MyPaper
          data={data1}
          scheme={"nivo"}
          numberOf="12,361"
          cartTitle="Emails Sent"
          Icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: MUITheme.palette.secondary.main }}
            />
          }
          allPercentage="+14%"
        />
        <MyPaper
          data={data2}
          scheme={"category10"}
          numberOf="431,225"
          cartTitle="Sales obtained"
          Icon={
            <PointOfSaleIcon
              sx={{ fontSize: "23px", color: MUITheme.palette.secondary.main }}
            />
          }
          allPercentage="+21%"
        />
        <MyPaper
          data={data3}
          scheme={"accent"}
          numberOf="32,441"
          cartTitle="New Clients"
          Icon={
            <PersonAddIcon
              sx={{ fontSize: "23px", color: MUITheme.palette.secondary.main }}
            />
          }
          allPercentage="+5%"
        />
      </Stack>
      <MyPaper
        data={data4}
        scheme={"dark2"}
        numberOf="1,325,134"
        cartTitle="Traffic Received"
        Icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: MUITheme.palette.secondary.main }}
          />
        }
        allPercentage="+43%"
      />
    </Stack>
  );
};

export default FirstSection;
