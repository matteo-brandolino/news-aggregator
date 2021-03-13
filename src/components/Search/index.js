import { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import GridLayout from '../GridLayout';
import Layout from '../Layout'
import { makeStyles } from '@material-ui/core/styles';

function Search({  data, setPending, setSuccess, pending }) {
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
    const classes = useStyles();

    const [title, setTitle] = useState()
    
    const [mainCardArticle, setMainCardArticle] = useState()
    const [bottomCardArticle, setBottomCardArticle] = useState()
    const [rightCardArticle, setRightCardArticle] = useState()
    
    useEffect(() => {
        setPending()
            setTitle(localStorage.getItem('title'))
            setMainCardArticle(JSON.parse(localStorage.getItem('mainCard')))
            setRightCardArticle(JSON.parse(localStorage.getItem('rightCard')))
            setBottomCardArticle(JSON.parse(localStorage.getItem('bottomCard')))
        setSuccess()
        // eslint-disable-next-line
    }, [pending, data])

    return (
        <Layout>
            <div className={classes.root}>
                {
                    mainCardArticle && bottomCardArticle && rightCardArticle ?
                    <>
                        <h2 className={classes.title}>News about {title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                        <GridLayout 
                            mainCardArticle={mainCardArticle && mainCardArticle}
                            bottomCardArticle={bottomCardArticle && bottomCardArticle}
                            rightCardArticle={bottomCardArticle && rightCardArticle}
                        />
                    </>
                    :
                    <h4>No Data</h4>
                }
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        data: state.search.data,
        pending: state.search.pending
}}
const mapDispactToProps = dispatch => {
    return {
        setPending : () => dispatch({
            type : "SET_PENDING"
        }),
        setSuccess : () => dispatch({
            type: "SET_SUCCESS"
        })
}}
  
export default connect(mapStateToProps, mapDispactToProps)(Search);
