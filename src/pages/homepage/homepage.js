import Container from "@material-ui/core/Container";
import EmployeesTable from "../../features/employees-table/components";

const Homepage = (props) => {

    return (
        <Container maxWidth="md">
            <EmployeesTable/>
        </Container>
    )
}

export default Homepage;