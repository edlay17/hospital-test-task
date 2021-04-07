import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom';

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
            cursor: "pointer",
        },
        textDecoration: "none",
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

const CustomizedTableWithLinks = (props) => {
    const {rows, headerRow} = props;

    const classes = useStyles();
    const tableRows = rows.map((row) => (
        <StyledTableRow key={row.id}  component={RouterLink} to={row.url}>
            <StyledTableCell>{row.id}</StyledTableCell>
            <StyledTableCell>{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.bdate}</StyledTableCell>
        </StyledTableRow>
    ));

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>{headerRow[0]}</StyledTableCell>
                        <StyledTableCell>{headerRow[1]}</StyledTableCell>
                        <StyledTableCell align="right">{headerRow[2]}</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTableWithLinks;