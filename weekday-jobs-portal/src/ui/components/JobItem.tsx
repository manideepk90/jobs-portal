import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)({
  maxWidth: "400px",
  minWidth: "300px",
  minHeight: "20px",
  borderRadius: "6px",
  width: "100%",
  transition: ".5s ease-in-out transform",
  padding : "5px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
export default function JobItem() {
  const data = {
    jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 61,
    minJdSalary: null,
    salaryCurrencyCode: "USD",
    location: "delhi ncr",
    minExp: 3,
    maxExp: 6,
    jobRole: "frontend",
    companyName: "Dropbox",
    logoUrl: "https://logo.clearbit.com/dropbox.com",
  };
  const CompanyName = styled(Typography)({
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "1px",
    marginBottom: "3px",
    color: "#8b8b8b",
  });
  const JobRole = styled(Typography)({
    fontSize: "14px",
    lineHeight: "1.5",
  });
  const JobLocation = styled(Typography)({
    fontSize: "11px",
    fontWeight: "500",
    marginTop: "5px",
  });
  return (
    <Container>
      <CompanyName variant="h3">{data?.companyName}</CompanyName>
      <JobRole variant="h2">{data?.jobRole}</JobRole>
      <JobLocation >{data?.location}</JobLocation>
    </Container>
  );
}
