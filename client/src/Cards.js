import { Button, Container } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid'; 
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import categories from "./img/categories.jpg";
import countries from "./img/flags.jpg";
import News from "./News";


const Cards = () => {

    const useStyles = makeStyles({
        media: {
            height: 180,
            paddingTop: "60%",
        },
        container: {
            display: "flex",
            justifyContent: "center",
        },
        loadingIcon: {
            width: 100,
            display:"block",
            marginLeft: "auto",
            marginRight: "auto",
        },
    });

    const classes = useStyles();
    
    const [checked, setChecked] = useState(true); // For collapsing the Category and Country image

    const [showCategories, setShowCategories] = useState(false);
    const [showCountries, setShowCountries] = useState(false);

    const toggleCard = () => {
        setChecked(false);
    }

    const toggleCategories = () => {
        setShowCategories(!showCategories);
        setShowCountries(false);
    }

    const toggleCountries = () => {
        setShowCountries(!showCountries);
        setShowCategories(false);
        
    } 

    return ( 
        <Container>
            <Grid container className={classes.container} spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Card onClick={() => toggleCard()}>
                            <Collapse in={checked}>
                                <CardMedia
                                    className={classes.media}
                                    image={categories} onClick={() => toggleCategories()}
                                    title="Categories"
                                />
                            </Collapse>
                            <CardActions >
                            <Button variant="text" color="secondary" fullWidth={true} onClick={() => toggleCategories()}>By Category</Button>
                            </CardActions>   
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card onClick={() => toggleCard()}>
                            <Collapse in={checked}>
                                <CardMedia
                                    className={classes.media}
                                    image={countries} onClick={() => toggleCountries()}
                                    title="Countries"
                                />
                            </Collapse>   
                            <CardActions >
                                <Button variant="text" color="secondary" fullWidth={true} onClick={() => toggleCountries()}>By Country</Button>
                            </CardActions>            
                        </Card>
                    </Grid>
            </Grid>

            <br />

            <News showCategories={showCategories} showCountries={showCountries}/>
            
        </Container>    
     );
}
 
export default Cards;