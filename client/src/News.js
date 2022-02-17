import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid'; 

import Categories from './Categories';
import Countries from './Countries';

import categories from "./img/categories.jpg";

import loadingIcon from "./img/animat-search-color.gif";



const News = ({showCategories, showCountries}) => {

    const useStyles = makeStyles(theme => ({
        loadingIcon: {
            width: 100,
            display:"block",
            marginLeft: "auto",
            marginRight: "auto",
        },
        newsContainer: {
            marginTop: 20,
            display:"inline-flex",
        },
        newsList: {
            listStyle: "none",
            textAlign: "center",
            justifyContent: "center",            
        },
        newsImage: {
            width: "100%",
            height: "100%",
            paddingTop: "50%",
        },
        newsLink: {
            textJustify: "auto",
            textDecoration: "none",
        },
        newsCard: {
            width: 400,
            height: 350,

            // custom styling at smaller breakpoints
            [theme.breakpoints.down("sm")]:{
                marginLeft: "auto", 
            },
            [theme.breakpoints.down("xs")]:{
                width: 280,
                marginLeft: 1, 
            }  
            
        },
      }));

    const classes = useStyles();

    const matches = useMediaQuery("(min-width:1210px)"); // For screen orientation of countries-categories menu. Changes to vertical display when under 1210px.

    const [articles, setArticles] = useState([]); // For setting the news coming in from the fetch call

    const [loading, setLoading] = useState(false); // For displaying loading icon when fetching news


    const newsFetch = async(url) => {
        setLoading(true);
        const data = await fetch(url);
        const jsonData = await data.json();
        setLoading(false);
        const articles = jsonData.response.articles;
        setArticles(articles);                               
    } 

    return (
        <Container>
            <br />
        
            {showCategories && <Categories articles={articles} newsFetch={newsFetch} matches={matches}/>}
            {showCountries && <Countries articles={articles} newsFetch={newsFetch} matches={matches}/>}
            
            {loading && <img src={loadingIcon} className={classes.loadingIcon} alt=""></img>}

            <Grid container className={classes.newsContainer} spacing={8}>
            {articles.map(article => (
                <Grid item xs={12} sm={10} md={6} lg={4}>
                    <Card className={classes.newsCard} elevation={3}>
                        <li className={classes.newsList} key={article.url}>
                            <CardMedia
                                className={classes.newsImage}
                                image={article.urlToImage !== null ? article.urlToImage : `${categories}`} 
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    <a className={classes.newsLink} href={article.url}>{article.title}</a>
                                </Typography>
                            </CardContent>
                        </li>
                    </Card>
                </Grid>    
            ))}
            </Grid>  
        </Container>    
    )
}

export default News;