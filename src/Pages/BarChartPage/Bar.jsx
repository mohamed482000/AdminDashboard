import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { data } from "./BarData";

const Bar = ({ isDashBoard = false }) => {
  const MUITheme = useTheme();
  return (
    <div style={{ height: "75vh" }}>
      <ResponsiveBar
        theme={{
          textColor: MUITheme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: MUITheme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: MUITheme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: MUITheme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: MUITheme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: MUITheme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: MUITheme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: MUITheme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: MUITheme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: MUITheme.palette.text.primary,
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
              background: MUITheme.palette.background.default,
              color: MUITheme.palette.text.primary,
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
        indexBy="year"
        keys={["Spain", "France", "Germany"]}
        height={isDashBoard ? 440 : 455}
        margin={
          isDashBoard
            ? { top: 30, right: 95, bottom: 190, left: 40 }
            : { top: 50, right: 100, bottom: 50, left: 60 }
        }
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashBoard ? "" : "Year",
          legendPosition: "middle",
          legendOffset: 40,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashBoard ? "" : "salary/month",
          legendPosition: "middle",
          legendOffset: -50,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
};

export default Bar;
