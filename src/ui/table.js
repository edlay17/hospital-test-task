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
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            cursor: "pointer",
        }
    },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: theme.spacing(100),
    },
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    }
}));

const CustomizedTables = (props) => {
    const classes = useStyles();
    const helloWorld = (mes) => {
        alert(mes);
    };
    const headerRowLenght = props.headerRow.length;
    const tableHeader = props.headerRow.map((elem, index) => {
        if (index + 1 === headerRowLenght) {
            return <StyledTableCell align="right">{elem}</StyledTableCell>
        }
        return <StyledTableCell>{elem}</StyledTableCell>
    });
    const tableRows = props.rows.map((row) => (
        <StyledTableRow key={row.id} onClick={() => {helloWorld(row.name)}}>
            <StyledTableCell>{row.id}</StyledTableCell>
            <StyledTableCell align="left">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.bdate}</StyledTableCell>
        </StyledTableRow>
    ));

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {tableHeader}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTables;