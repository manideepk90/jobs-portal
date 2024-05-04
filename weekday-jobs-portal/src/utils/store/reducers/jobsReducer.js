import { createSlice } from "@reduxjs/toolkit";
import actions from "../../../resources/constants";
import { HYDRATE } from "next-redux-wrapper";
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
    HYDRATE(state, { payload }) {
      state = { ...state, ...payload };
    },
    fetchJobs(state, { payload }) {
      state.jobs = payload.jobs;
      state.jobsCount = payload.jobsCount;
      state.hasLoading = false;
    },
    setLoading(state, { payload }) {
      state.hasLoading = payload.loading;
    },
  },
});

export default jobsSlice.reducer;
