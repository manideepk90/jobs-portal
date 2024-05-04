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
    minExperience: "",
    minSalary: "",
    companyName: "",
  },
  selectedFilters: {
    isFiltered: false,
    roles: [],
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
      state.hasMore = state.jobs?.length < state.jobsCount;
      state.hasLoading = false;
    },
    setRoles(state, { payload }) {
      state.selectedFilters.roles = payload.roles;

      state.selectedFilters.isFiltered =
        payload.roles.length > 0 ? true : false;
      state.filterJobs = state.jobs.filter((element) =>
        payload.roles.some((jobRole) => element.jobRole === jobRole)
      );
    },
    setLoading(state, { payload }) {
      state.hasLoading = payload.loading;
    },
  },
});

export default jobsSlice.reducer;
