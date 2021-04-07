import {makeStyles} from "@material-ui/core/styles";

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
    },
    row: {
        '&:hover': {
            cursor: "default",
        },
    }
}));

export default useStyles;