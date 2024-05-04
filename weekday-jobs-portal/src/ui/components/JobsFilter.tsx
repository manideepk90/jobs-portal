import { Box, styled } from "@mui/material";
import MultipleAutoComplete from "@/ui/components/Inputs/MultipleAutoComplete";
import { useDispatch, useSelector } from "react-redux";
import { jobsSlice } from "@/utils/store/reducers/jobsReducer";
const Container = styled(Box)({
  padding: "20px 45px",
});
export default function JobsFilter() {
  const { roles } = useSelector((state: any) => state.jobs.filters);
  const { roles: selectedRoles } = useSelector(
    (state: any) => state.jobs.selectedFilters
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <MultipleAutoComplete
        options={roles}
        values={selectedRoles}
        setValue={(e: any) => {
          dispatch(jobsSlice.actions.setRoles({ roles: e }));
        }}
      />
    </Container>
  );
}
