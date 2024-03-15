import React from "react";
import Stack from "@mui/system/Stack";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Header from "../../component/Header";

const Dashboard = () => {
  return (
    <Stack gap={1}>
      <Header
        isDashboard={true}
        title={"DASHBOARD"}
        subTitle={"Welcome to your dashboard"}
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Stack>
  );
};

export default Dashboard;
