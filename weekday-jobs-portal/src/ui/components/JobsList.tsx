import { useDispatch, useSelector } from "react-redux";
import JobItem from "./JobItem";
import { Box, styled, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { jobsSlice } from "@/utils/store/reducers/jobsReducer";

const Container = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  gap: "25px",
});

export default function JobsList() {
  const { jobs, isLoading } = useSelector((state: any) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        dispatch(
          jobsSlice.actions.fetchJobs({
            jobs: result?.jdList,
            jobsCount: result?.totalCount,
          })
        )
      )
      .catch((error) => console.error(error));
  }, []);
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
