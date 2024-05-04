import { createSlice } from "@reduxjs/toolkit";

import { mergeAndUpdateData } from "./../../MergeAndUpdate";
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
      state.jobs = mergeAndUpdateData(state.jobs, payload.jobs, "jdUid");
      state.jobsCount = payload.jobsCount;
      state.hasLoading = false;
    },
    setLoading(state, { payload }) {
      state.hasLoading = payload.loading;
    },
  },
});

export default jobsSlice.reducer;
