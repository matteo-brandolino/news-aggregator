import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Badge from './Badge';


function BottomCard({badgeText, title, imgUrl}) {
    const useStyles = makeStyles(() => ({
      root: {},
      paper: {
        background: `url(${imgUrl}) no-repeat center center`,
        backgroundSize: "cover",
        height:"10em",
        position: 'relative'
      },
      badge: {
        marginTop: '1em'
      },
      title: {
          margin: '1em 0.5em'
      }
    }));
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper} elevation={3} />
            <div className={classes.badge}>
                <Badge text={badgeText} />
            </div>
            <h6 className={classes.title}>{title}</h6>    
        </>
    )
}

export default BottomCard
