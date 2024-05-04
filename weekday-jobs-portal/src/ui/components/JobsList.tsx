import { useSelector } from "react-redux";
import JobItem from "./JobItem";
import { Box, styled, CircularProgress } from "@mui/material";
import { headers } from "next/headers";
const Container = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  gap: "25px",
});

export default function JobsList() {
  const { jobs, isLoading } = useSelector((state: any) => state.jobs);

  return (
    <Container>
      {jobs?.length > 0 &&
        jobs?.map((ele: any) => <JobItem data={ele} key={ele?.jdUid} />)}
      {isLoading && (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
