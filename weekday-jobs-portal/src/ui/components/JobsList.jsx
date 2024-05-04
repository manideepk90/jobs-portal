"use client";
import { useDispatch, useSelector } from "react-redux";
import JobItem from "./JobItem";
import { Box, styled, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { jobsSlice } from "@/utils/store/reducers/jobsReducer";

const Container = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  gap: "25px",
  padding : "20px 45px"
});

export default function JobsList() {
  const { jobs, hasMore } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(0);
  const observer = useRef();

  const fetchJobs = async (limit = 10) => {
    setIsLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: limit,
      offset: page,
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
      .then((result) => {
        dispatch(
          jobsSlice.actions.fetchJobs({
            jobs: result?.jdList,
            jobsCount: result?.totalCount,
          })
        );
        setPage((p) => p + 1);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
  };
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (!hasMore) return;
      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchJobs();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    fetchJobs();
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      <Container id="list">
        {jobs?.length > 0 &&
          jobs?.map((ele, index) => {
            if (index + 1 === jobs?.length)
              return (
                <div ref={lastElementRef}>
                  <JobItem data={ele} key={ele?.jdUid} />;
                </div>
              );
            else {
              return <JobItem data={ele} key={ele?.jdUid} />;
            }
          })}
      </Container>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
