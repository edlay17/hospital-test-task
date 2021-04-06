import Container from "@material-ui/core/Container";
import CustomButton from "../../ui/buttons/custom-button";
import SingleEmployeeTable from "../../features/single-employee/components";
import {useParams} from "react-router-dom";

const SingleEmploee = (props) => {
    let {id} = useParams();

    return (
        <Container maxWidth="md">
            <div>
                <CustomButton text={"back to homepage"} toUrl={"/"}/>
            </div>
            <div>
                <SingleEmployeeTable id={id}/>
            </div>
        </Container>
    )
}

export default SingleEmploee;