import { Box, styled } from "@mui/material";
import MultipleAutoComplete, {
  AutoComplete,
} from "@/ui/components/Inputs/MultipleAutoComplete";
import { useDispatch, useSelector } from "react-redux";
import { jobsSlice } from "@/utils/store/reducers/jobsReducer";
const Container = styled(Box)({
  padding: "20px 45px",
  display: "flex",
  gap: 10,
  alignItems: "end",
});
export default function JobsFilter() {
  const { roles, companies } = useSelector((state: any) => state.jobs.filters);
  const { roles: selectedRoles } = useSelector(
    (state: any) => state.jobs.selectedFilters
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <MultipleAutoComplete
        options={roles}
        label={"Roles"}
        values={selectedRoles}
        setValue={(e: any) => {
          dispatch(jobsSlice.actions.setRoles({ roles: e }));
        }}
      />
      <AutoComplete
        label={"Experience"}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      />
      <AutoComplete
        label={"Minimum Base Salary"}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      />
      <AutoComplete
        label={"Search Company"}
        options={companies}
      />
    </Container>
  );
}
