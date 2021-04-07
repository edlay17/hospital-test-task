// libs
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom';

// styles
import useStyles from "./styles";
import StyledTableRow from "../styles/styled-tab-row";
import StyledTableCell from "../styles/styled-table-cell";

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