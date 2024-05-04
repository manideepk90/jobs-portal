import { createSlice } from "@reduxjs/toolkit";
import actions from "../../../resources/constants";
const initialState = {
  jobs: [],
  jobsCount: 0,
  hasLoading: false,
  error: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobs(state, { payload }) {
      state.jobs = payload.jobs;
      state.jobsCount = payload.jobsCount;
      state.hasLoading = false;
    },
  },
});

export default jobsSlice.reducer;
