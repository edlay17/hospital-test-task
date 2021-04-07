// libs
import Container from "@material-ui/core/Container";
import {useParams} from "react-router-dom";

// ui
import CustomButton from "../../ui/buttons/custom-button/custom-button";

// features
import SingleEmployeeTable from "../../features/single-employee/components";

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