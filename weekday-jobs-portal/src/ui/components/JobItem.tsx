import { Box, styled } from "@mui/material"

const Container = styled(Box)({
    maxWidth: "400px",
    minWidth: "300px",
    minHeight : "20px",
    borderRadius : "6px",
    width : "100%",
    transition : ".5s ease-in-out transform",
    boxShadow : "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
    "&:hover" :{
        transform : "scale(1.1)"
    }
})
export default function JobItem() {
    return <Container>
    </Container>
}