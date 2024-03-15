import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import { countries } from "./world_countries";
import { useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const Geo = ({ isDashBoard = false }) => {
  const MUITheme = useTheme();
  return (
    <ResponsiveChoropleth
      theme={{
        text: {
          fontSize: 11,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: MUITheme.palette.text.primary,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: MUITheme.palette.primary.main,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              stroke: MUITheme.palette.text.primary,
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: MUITheme.palette.text.secondary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: MUITheme.palette.text.disabled,
            strokeWidth: 1,
          },
        },

        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          text: {
            fontSize: 12,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: "#333333",
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
            background: "#ffffff",
            color: "#333333",
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="spectral"
      projectionScale={isDashBoard ? 70 : 150}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1}
      borderColor="#fff"
      fill={[]}
      legends={
        isDashBoard
          ? []
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -30,
                itemsSpacing: 1,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor:
                  MUITheme.palette.mode === "light"
                    ? MUITheme.palette.grey[900]
                    : MUITheme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: MUITheme.palette.text.primary,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default Geo;
