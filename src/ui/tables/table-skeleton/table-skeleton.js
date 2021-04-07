// libs
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

// styles
import StyledTableRow from "../styles/styled-tab-row";
import StyledTableCell from "../styles/styled-table-cell";
import useStyles from "./styles";

const CustomizedTableSkeleton = (props) => {
    const {count} = props;

    const classes = useStyles();
    let skeletonItems = [];
    for (let i = 0; i < count; i++){
        skeletonItems.push(
            <StyledTableRow>
                <StyledTableCell><Skeleton/></StyledTableCell>
                <StyledTableCell><Skeleton/></StyledTableCell>
                <StyledTableCell align="right"><Skeleton/></StyledTableCell>
            </StyledTableRow>
        )
    }

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            loading...
                        </StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.rows}>
                    {skeletonItems}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTableSkeleton;