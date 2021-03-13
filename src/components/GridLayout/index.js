import Grid from '@material-ui/core/Grid';
import MainCard from '../Dashboard/MainCard';
import BottomCard from '../Dashboard/BottomCard';
import RightCard from '../Dashboard/RightCard';
import Trending from '../Dashboard/Trending';

function GridLayout( { trendingNews, mainCardArticle, bottomCardArticle, rightCardArticle }) {

    return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            { trendingNews && <Trending trendingNews={trendingNews}/> }
        </Grid>
        <Grid item xs={12} md={8} >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <MainCard 
                        badgeText={mainCardArticle && mainCardArticle.source.name}
                        title={mainCardArticle && mainCardArticle.title} 
                        imgUrl={mainCardArticle && mainCardArticle.urlToImage}
                    />
                </Grid>
                {
                    bottomCardArticle && bottomCardArticle.map((item, idx) => (
                        <Grid key={idx} item xs={12} sm={4}>
                            <BottomCard 
                                badgeText={item.source.name} 
                                title={item.title}
                                imgUrl={item.urlToImage}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
                {
                    rightCardArticle && rightCardArticle.map((item, idx) => (
                        <Grid key={idx} item xs={12}>
                            <RightCard 
                                badgeText={item.source.name} 
                                title={item.title}
                                imgUrl={item.urlToImage}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
      </Grid>
    )
}

export default GridLayout
