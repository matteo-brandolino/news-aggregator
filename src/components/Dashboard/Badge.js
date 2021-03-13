import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

function Badge({text, color}) {
  const useStyles = makeStyles(() => ({
      chip: {
        backgroundColor:color ? color : '#FFF9C6',
        color:'black',
        padding: '10px 20px',
  
      },
    }));
  const classes = useStyles();
    return (
        <Chip 
            className={classes.chip}
            label={text} 
        />
    )
}

export default Badge
