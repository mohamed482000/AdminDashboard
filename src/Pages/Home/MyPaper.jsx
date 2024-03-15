import React from "react";
import Stack from "@mui/system/Stack";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { ResponsivePie } from "@nivo/pie";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";

const MyPaper = ({
  data,
  numberOf,
  cartTitle,
  Icon,
  allPercentage,
  scheme,
}) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={1}
      sx={{
        flexGrow: 1,
        minWidth: "333px",
        height: "115px",
        padding: "12px",
      }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Stack gap={1}>
          {Icon}
          <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
            {numberOf}
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
            {cartTitle}
          </Typography>
        </Stack>
        <Box sx={{ height: "70px", width: "87px" }}>
          <ResponsivePie
            data={data}
            colors={{ scheme }}
            theme={{
              textColor: theme.palette.text.primary,
              fontSize: 11,
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.secondary,
                  },
                },
              },
              grid: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            width={87}
            height={70}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            padAngle={0.7}
            cornerRadius={7}
            fit={false}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", "0.2"]],
            }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
          />
          <Typography
            sx={{ fontSize: "13px", fontWeight: "bold", textAlign: "center" }}
          >
            {allPercentage}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default MyPaper;
