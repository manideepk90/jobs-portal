import JobItem from "./JobItem";
import { Box, styled } from "@mui/material";
const Container = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  gap: "25px",
});

export default function JobsList() {
  return (
    <Container>
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </Container>
  );
}
