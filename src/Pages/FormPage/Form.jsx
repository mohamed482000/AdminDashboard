import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Slide from "@mui/material/Slide";
import { useForm } from "react-hook-form";
import Header from "../../component/Header";
import { useTheme } from "@mui/material";

const Form = () => {
  const MUITheme = useTheme();
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const regularExpForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };
  ///snack bar functions
  const handleClick = () => {
    setSnackBarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <Container
      fixed
      sx={{
        [MUITheme.breakpoints.down("md")]: {
          width: "70%",
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
        },
      }}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ display: "flex", my: 3, justifyContent: "space-between" }}>
          <TextField
            error={errors.firstName}
            {...register("firstName", { required: true, minLength: 3 })}
            helperText={
              errors.firstName ? "This field is required & min 3 character" : ""
            }
            sx={{ width: "49%" }}
            id="filled-basic"
            label="First Name"
            variant="filled"
          />
          <TextField
            error={errors.lastName}
            {...register("lastName", { required: true, minLength: 3 })}
            helperText={
              errors.lastName ? "This field is required & min 3 character" : ""
            }
            sx={{ width: "49%" }}
            id="filled-basic"
            label="Last Name"
            variant="filled"
          />
        </Box>
        <TextField
          error={errors.mail}
          {...register("mail", { required: true, pattern: regularExpForEmail })}
          helperText={errors.mail ? "Please provide a valid email address" : ""}
          sx={{ width: "100%", my: 1 }}
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          error={errors.number}
          {...register("number", { required: true, minLength: 3 })}
          helperText={
            errors.number ? "Please provide a valid Phone number" : ""
          }
          type="number"
          sx={{ width: "100%", my: 1 }}
          id="filled-basic"
          label="Contact Number"
          variant="filled"
        />
        <TextField
          sx={{ width: "100%", my: 1 }}
          id="filled-basic"
          label="Adress 1"
          variant="filled"
        />
        <TextField
          sx={{ width: "100%", my: 1 }}
          id="filled-basic"
          label="Adress 2"
          variant="filled"
        />
        <TextField
          id="filled-select-currency"
          sx={{ width: "100%", my: 1 }}
          select
          label="Role"
          variant="filled"
          defaultValue="Admin"
        >
          {["Admin", "Manger", "User"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          sx={{
            my: 1,
            marginLeft: "auto",
            display: "block",
            textTransform: "capitalize",
          }}
        >
          create new user
        </Button>
      </Box>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackBarOpen}
          onClose={handleClose}
          autoHideDuration={5000}
          TransitionComponent={SlideTransition}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ width: "100%" }}
          >
            Account Create Successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Form;
