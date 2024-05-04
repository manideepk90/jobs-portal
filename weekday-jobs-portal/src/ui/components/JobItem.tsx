import { Box, styled, Typography, Button } from "@mui/material";
import Image from "next/image";
import ReadMore from "./ReadMore";
const Container = styled(Box)({
  maxWidth: "360px",
  minWidth: "300px",
  minHeight: "20px",
  borderRadius: "20px",
  width: "100%",
  transition: ".5s ease-in-out transform",
  padding: "25px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
  "&:hover": {
    transform: "scale(1.025)",
  },
});
export default function JobItem({ data }: { data: any }) {
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
    fontWeight: "600",
    marginTop: "5px",
  });
  const EstimatedSalary = styled(Typography)({
    fontSize: "14px",
    fontWeight: 400,
    color: "rgb(77, 89, 106)",
  });

  const ExperienceTitle = styled(Typography)({
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "1px",
    marginBottom: "3px",
    color: "#8b8b8b",
  });
  const Experience = styled(Typography)({
    fontSize: "14px",
    lineheight: 1.5,
  });
  const ApplyButton = styled(Button)({
    width: "100%",
    backgroundColor: "rgb(85, 239, 196)",
    color: "rgb(0, 0, 0)",
    fontWeight: 500,
    fontSize: "16px",
    padding: "8px 18px",
    borderRadius: "8px",
    margin: "5px 0",
    textTransform: "none",
  });
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Box>
          <Image
            className="logo"
            src={data?.logoUrl}
            alt={data?.jobRole}
            width={"30"}
            height={"30"}
          />
        </Box>
        <Box>
          <CompanyName variant="h3">{data?.companyName}</CompanyName>
          <JobRole variant="h2">{data?.jobRole}</JobRole>
          {data?.location && (
            <JobLocation>{data?.location?.toLocaleUpperCase()}</JobLocation>
          )}
        </Box>
      </Box>
      {(data?.minJdSalary || data?.maxJdSalary) && (
        <EstimatedSalary>
          Estimated Salary: &#x20b9;{" "}
          {`${data?.minJdSalary || ""}${data?.minJdSalary ? " - " : ""}${
            data?.maxJdSalary
          }`}{" "}
          LPA
        </EstimatedSalary>
      )}
      {data?.jobDetailsFromCompany && (
        <>
          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: 500,
            }}
          >
            About Company:
          </Typography>

          <ReadMore data={data?.jobDetailsFromCompany} maxChar={500} />
        </>
      )}
      {data?.minExp && (
        <Box>
          <ExperienceTitle>Minimun Experience</ExperienceTitle>
          <Experience>
            {data?.minExp} {data?.minExp === 1 ? "year" : "years"}
          </Experience>
        </Box>
      )}
      {data?.maxExp && (
        <Box>
          <ExperienceTitle>Maximum Experience</ExperienceTitle>
          <Experience>
            {data?.maxExp} {data?.maxExp === 1 ? "year" : "years"}
          </Experience>
        </Box>
      )}
      {data?.jdLink && <ApplyButton>⚡ Easy Apply</ApplyButton>}
    </Container>
  );
}
