import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Badge from './Badge';
import Marquee from "react-fast-marquee";
import MarqueeContent from './MarqueeContent';

function Trending({trendingNews}) {
    
    const useStyles = makeStyles((theme) => ({
        paper: {
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
            height: '50px',
            display:'none',
            [theme.breakpoints.up('md')]: {
                display:'block'
            },
        },
        div: {
            position: 'absolute',
            right:0,
            width:'82%',
            [theme.breakpoints.up('lg')]: {
                width:'87%',
            },
          },
        badge: {
            position:'absolute',
            left: '1%',
            top: '16%'
        },
      }));
    const classes = useStyles();
    
    return (
        <Paper className={classes.paper}>
            <div className={classes.div}>
                <Marquee 
                    gradient={false}
                >
                    {
                        trendingNews && trendingNews.map((news, idx) => (
                            <MarqueeContent key={idx} message={`${news.title}`} />
                        ))
                    }
                </Marquee>
            </div>

            <div className={classes.badge}>
                <Badge text='Trending now' color="#AA0000" />
            </div>
        </Paper>
    )
}

export default Trending
