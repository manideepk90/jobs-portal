import { createSlice } from "@reduxjs/toolkit";

import { mergeAndUpdateData } from "./../../MergeAndUpdate";
const initialState = {
  jobs: [],
  jobsCount: 0,
  hasLoading: false,
  hasMore: true,
  error: null,
  filterJobs: [],
  filters: {
    roles: [],
    companies: [],
  },
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
      state.jobsCount = payload.jobsCount || 0;
      state.filters.roles = [...new Set(state.jobs.map((ele) => ele?.jobRole))];
      state.filters.companies = [
        ...new Set(state.jobs.map((ele) => ele?.companyName)),
      ];
      state.hasMore = state.jobs?.length < state.jobsCount;
      state.hasLoading = false;
    },
    setFilteredJobs(state, { payload }) {
      state.filterJobs = payload.filterJobs;
    },
    setLoading(state, { payload }) {
      state.hasLoading = payload.loading;
    },
  },
});

export default jobsSlice.reducer;
