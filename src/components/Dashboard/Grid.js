import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import useAxios from '../../customHooks/useAxios';
import useLang from '../../customHooks/useLang';
import Preloader from '../Preloader';
import GridLayout from '../GridLayout';

const useStyles = makeStyles((theme) => ({
  root: {
      width:"90%",
      margin: "0 auto"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    paddingTop: '0.5em'
  },
}));


export default function FullWidthGrid() {
    const classes = useStyles();
    const [country, setCountry] = useState()
    const [countryName, setCountryName] = useState()
    const [trendingNews, setTrendingNews] = useState()
    const [mainCardArticle, setMainCardArticle] = useState()
    const [bottomCardArticle, setBottomCardArticle] = useState()
    const [rightCardArticle, setRightCardArticle] = useState()
    
    //find your conutry
    const country_response = useLang("https://ipapi.co/json/");

    const res = useAxios("https://newsapi.org/v2/top-headlines", {
        params: {
            country: country,
            apiKey: process.env.REACT_APP_API_KEY,
            pageSize: 8
        }
    }, country);

    const trending_response = useAxios("https://newsapi.org/v2/everything", {
        params: {
            q: 'news',
            //last 3h trending post
            from: new Date(new Date().getTime() - 180*60000).toISOString(),
            to: new Date().toISOString(),
            sortBy:'popularity',
            language: country==='us' || country==='uk' ? 'en' : country,
            apiKey: process.env.REACT_APP_API_KEY,
            pageSize:8
        }
    }, country);
    
    useEffect(() => {
        setCountry(country_response.response && country_response.response.data.country.toLowerCase())
        setCountryName(country_response.response && country_response.response.data.country_name)
        
    }, [country,country_response.response])

    useEffect(() => {
        setMainCardArticle(res.response && res.response.data.articles.splice(0,1)[0])
        setBottomCardArticle(res.response && res.response.data.articles.splice(0,3))
        setRightCardArticle(res.response && res.response.data.articles)
    }, [res.response])
    
    useEffect(() => {
        setTrendingNews(trending_response.response && trending_response.response.data.articles)
    }, [trending_response.response])

    if (res.isLoading) {
        return <Preloader />
    }
  return (
    <div className={classes.root}>
    <h3 className={classes.title}>Top News in {countryName}</h3>
        <GridLayout 
            trendingNews={trendingNews}
            mainCardArticle={mainCardArticle}
            bottomCardArticle={bottomCardArticle}
            rightCardArticle={rightCardArticle}
        />
    </div>
  );
}