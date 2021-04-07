import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: theme.spacing(2),
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: theme.spacing(100),
    },
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    red: {
        color: "red",
    }
}));

const CustomizedTable = (props) => {
    const {rows, headerRow} = props;

    const classes = useStyles();
    const tableRows = rows.map((row) => (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="right">{row.from}</StyledTableCell>
            <StyledTableCell align="left" className={row.isViolation && classes.red}>{`${row.to} (${row.countOtherEmployeesOnWork} another employee)`}</StyledTableCell>
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