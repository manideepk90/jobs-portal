import { Box, styled } from "@mui/material";
import MultipleAutoComplete, {
  AutoComplete,
} from "@/ui/components/Inputs/MultipleAutoComplete";
import { useDispatch, useSelector } from "react-redux";
import { jobsSlice } from "@/utils/store/reducers/jobsReducer";
import { useEffect, useState } from "react";
const Container = styled(Box)({
  padding: "20px 45px",
  display: "flex",
  gap: 10,
  alignItems: "end",
  flexWrap: "wrap",
});
export default function JobsFilter() {
  const { roles, companies } = useSelector((state: any) => state.jobs.filters);
  const { jobs } = useSelector((state: any) => state.jobs);
  //   const { roles: selectedRoles } = useSelector(
  //     (state: any) => state.jobs.selectedFilters
  //   );
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    // for filters we are checking one by one in this function whenever user selects the filters
    const updateFilteredJobs = () => {
      let filtered = jobs;
      if (
        selectedRoles.length === 0 &&
        !selectedCompany &&
        !selectedExperience &&
        !selectedSalary
      ) {
        dispatch(jobsSlice.actions.setFilteredJobs([]));
      }
      if (selectedRoles.length > 0) {
        filtered = filtered.filter((job: any) =>
          selectedRoles.some((role) => role === job.jobRole)
        );
      }

      if (selectedExperience) {
        filtered = filtered.filter((job: any) =>
          job.minJdSalary
            ? parseInt(job.minExp) >= selectedExperience
            : job?.maxJdSalary
            ? parseInt(job.maxExp) <= selectedExperience
            : false
        );
      }

      if (selectedSalary) {
        const minSalary = parseInt(selectedSalary?.slice(0, -3));

        filtered = filtered.filter((job: any) =>
          job.minJdSalary
            ? parseInt(job.minJdSalary) >= minSalary
            : job?.maxJdSalary
            ? parseInt(job.minJdSalary) >= minSalary
            : false
        );
      }

      if (selectedCompany) {
        filtered = filtered.filter(
          (job: any) => job?.companyName === selectedCompany
        );
      }

      if (filtered.length > 0) {
        dispatch(jobsSlice.actions.setFilteredJobs({ filterJobs: filtered }));
      }
    };

    updateFilteredJobs();
  }, [
    selectedRoles,
    selectedExperience,
    selectedSalary,
    selectedCompany,
    jobs,
  ]);
  return (
    <Container>
      <MultipleAutoComplete
        options={roles}
        label={"Roles"}
        values={selectedRoles}
        setValue={(e: any) => {
          setSelectedRoles(e);
          //   dispatch(jobsSlice.actions.setRoles({ roles: e }));
        }}
      />
      <AutoComplete
        label={"Experience"}
        value={selectedExperience}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        setValue={(e: any) => setSelectedExperience(e)}
        defaultValue={null}
      />
      <AutoComplete
        label={"Minimum Base Salary"}
        value={selectedSalary}
        options={["10LPA", "20LPA", "30LPA", "40LPA", "50LPA", "60LPA"]}
        setValue={(e: any) => setSelectedSalary(e)}
        defaultValue={null}
      />
      <AutoComplete
        label={"Search Company"}
        value={selectedCompany}
        options={companies}
        defaultValue={null}
        setValue={(e: any) => setSelectedCompany(e)}
      />
    </Container>
  );
}
