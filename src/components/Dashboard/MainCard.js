
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Badge from './Badge';


function MainCard({badgeText, title, imgUrl}) {
    const useStyles = makeStyles((theme) => ({
      root: {
          width:"90%",
          margin: "0 auto"
      },
      paper: {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${imgUrl}) no-repeat center center`,
        backgroundSize: "cover",
        height:"25em",
        position: 'relative'
      },
      title: {
          width:'65%',
          color: 'white',
          fontSize: '1.1rem',
          marginTop:'0.5em',
          [theme.breakpoints.up('sm')]: {
            fontSize: '1.3rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '1.75rem'
          },
      },
      badge: {
        position: "absolute",
        bottom:"50px",
        left: '20px',
      }
    
    }));
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={3}>
            <div className={classes.badge}>
                <Badge text={badgeText} />
                <h6 className={classes.title}>{title}</h6>
            </div>
        </Paper>
    )
}

export default MainCard
