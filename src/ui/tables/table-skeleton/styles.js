import {makeStyles} from "@material-ui/core/styles";

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
        marginBottom: theme.spacing(5),
    },
    rows: {
        padding: 0,
    }
}));

export default useStyles;