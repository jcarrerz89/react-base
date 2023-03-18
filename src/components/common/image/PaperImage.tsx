import { styled } from "@mui/material/styles";
import { Paper, makeStyles } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
}));

const ImagePaper = (props: { imageSrc: string }) => {
    return (
        <StyledPaper>
            <img
                src={props.imageSrc}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </StyledPaper>
    );
};

export default ImagePaper;
