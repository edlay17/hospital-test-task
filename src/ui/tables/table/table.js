// libs
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// styles
import StyledTableCell from "../styles/styled-table-cell";
import StyledTableRow from "../styles/styled-tab-row";
import useStyles from "./styles";

const CustomizedTable = (props) => {
    const {rows, headerRow} = props;
    const classes = useStyles();
    const tableRows = rows.map((row) => (
        <StyledTableRow className={classes.row} key={row.id}>
            <StyledTableCell align="right">{row.from}</StyledTableCell>
            <StyledTableCell align="left" className={row.isViolation && classes.red}>
                {`${row.to} (${row.countOtherEmployeesOnWork} another employee${row.countOtherEmployeesOnWork>1 ? "s" : ""})`}
            </StyledTableCell>
        </StyledTableRow>
    ));

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">{headerRow[0]}</StyledTableCell>
                        <StyledTableCell align="left">{headerRow[1]}</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTable;