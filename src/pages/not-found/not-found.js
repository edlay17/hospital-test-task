import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../../ui/buttons/custom-button";

const NotFoundPage = (props) => {
    return (
        <Container maxWidth="md">
            <div>
                <CustomButton text={"back to homepage"} toUrl={"/"}/>
            </div>
            <Typography variant="h1" component="h4">
                page not found
            </Typography>
        </Container>
    )
}

export default NotFoundPage;