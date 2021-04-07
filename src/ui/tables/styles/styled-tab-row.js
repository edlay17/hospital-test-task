import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            cursor: "pointer",
        },
        textDecoration: "none",
    },
}))(TableRow);

export default StyledTableRow;