// libs
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

// styles
import useStyles from "./styles";

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