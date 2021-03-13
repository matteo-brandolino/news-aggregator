import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Badge from './Badge';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


function RightCard({badgeText, title, imgUrl}) {
  const useStyles = makeStyles(() => ({
    paper: {
      background: `url(${imgUrl}) no-repeat center center`,
      backgroundSize: "cover",
      height:"6em",
      width:"6em",
    },
    title : {
        marginTop:'0.75em'
    },
    box: {
      padding: '1em'
    },
    divider: {
      paddingBottom: '0.75em'
    }
  }));

  const classes = useStyles();

    return (
      <>
        <Box display='flex' className={classes.divider}>
          <Box>
            <Paper className={classes.paper} elevation={3} />   
          </Box>
          <Box className={classes.box}>
            <Badge text={badgeText} />
            <h6 className={classes.title}>{title}</h6>
          </Box>
        </Box>
        <Divider />
      </>
    )
}

export default RightCard
