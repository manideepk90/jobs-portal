import { styled, Typography } from "@mui/material";
import { useState } from "react";
const ExpansionText = styled(Typography)({
  color: "#4943da",
  fontSize: "14px",
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
});
interface ReadMore {
  data: string;
  maxChar: number;
  fontSize?: string;
}
export default function ReadMore({
  data,
  maxChar = 300,
  fontSize = "14px",
}: ReadMore) {
  const [expanded, setExpanded] = useState(false);
  const JobDescription = styled(Typography)({
    whiteSpace: "pre-wrap",
    fontSize: fontSize,
  });
  const toggleExpansion = () => {
    setExpanded((p) => !p);
  };
  return (
    <>
      <JobDescription>
        {data?.length > 300 ? (expanded ? data : data?.slice(0, 300)) : data}
      </JobDescription>
      {data?.length > 300 && expanded ? (
        <ExpansionText onClick={toggleExpansion}>Show less</ExpansionText>
      ) : (
        <ExpansionText onClick={toggleExpansion}>Show more</ExpansionText>
      )}
    </>
  );
}
