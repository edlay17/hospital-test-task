import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

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
        }
    },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    row: {
        height: theme.spacing(10),
        marginTop: 0,
        marginBotom: theme.spacing(5),
    },
    rows: {
        padding: 0,
    }
}));

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