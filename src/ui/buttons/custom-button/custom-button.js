import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));

const CustomButton = (props) => {
    const {text, toUrl} = props;
    const classes = useStyles();
    return (
        <Button variant="contained" color="primary" className={classes.root} component={RouterLink} to={toUrl}>
            {text}
        </Button>
    )
}

export default CustomButton;