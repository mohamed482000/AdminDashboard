import React from "react";
import Stack from "@mui/system/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import IconButton from "@mui/material/IconButton";
import Line from "../LineChartPage/Line";
import { Transactions } from "./data";

const SecondSection = () => {
  const MUITheme = useTheme();
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      <Paper
        sx={{
          padding: "16px 32px",
          [MUITheme.breakpoints.down("md")]: {
            padding: "16px 15px",
          },
          height: "360px",
          flexGrow: "1",
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack>
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "1.25rem",
                fontWeight: "700",
                lletterSpacing: "0.0075em",

                color: MUITheme.palette.secondary.main,
              }}
            >
              revenue generated
            </Typography>
            <Typography>$59,342.32</Typography>
          </Stack>
          <IconButton aria-label="download">
            <GetAppOutlinedIcon />
          </IconButton>
        </Stack>
        <Line isDashBord={"yes"} />
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 360,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={MUITheme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={MUITheme.palette.error.main}
                color={MUITheme.palette.getContrastText(
                  MUITheme.palette.error.main
                )}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default SecondSection;
