import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Icon from '@material-ui/core/Icon';

import gbflag from "./img/united-kingdom.png";
import usflag from "./img/united-states.png";
import caflag from "./img/canada.png";
import auflag from "./img/australia.png";
import jpflag from "./img/japan.png";
import saflag from "./img/saudi-arabia.png";
import cnflag from "./img/china.png";


const Countries = ({newsFetch, matches}) => {

    const [color, setColor] = useState([])
    const toggleColor = (event, newColor) => {
        setColor(newColor);
    };

    const useStyles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            top: -10,
        },
        btn: {
            backgroundColor: "#009688",
            color: "white",
            padding: 15,
            paddingRight: 25,

            '&:hover': {
                backgroundColor: "#00796b",
            }
        },
        countryIcon: {
            height: "55%",
            position:"absolute",
            marginTop: -2,
        },
    })

    const classes = useStyles();
 
    return ( 
        <div>
          <Typography variant="h4" style={{textAlign: "center"}}>Countries</Typography>
          <br/> 
          <Container className={classes.container}>
            <ToggleButtonGroup orientation={`${matches ? `horizontal`: `vertical`}`} variant="contained" size="large" value={color} exclusive onChange={toggleColor}>
              
                <ToggleButton className={classes.btn} value="first" onClick={() => {newsFetch('/uk')}}>United Kingdom
                    <Icon>
                        <img className={classes.countryIcon} src={gbflag} alt=""/>
                    </Icon>
                </ToggleButton>

                <ToggleButton className={classes.btn} value="second" onClick={() => {newsFetch('/usa')}}>United States
                    <Icon>
                        <img className={classes.countryIcon} src={usflag} alt=""/>
                    </Icon>
                </ToggleButton>

                <ToggleButton className={classes.btn} value="third" onClick={() => {newsFetch('/canada')}}>Canada
                    <Icon>
                        <img className={classes.countryIcon} src={caflag} alt=""/>
                    </Icon>
                </ToggleButton>

                <ToggleButton className={classes.btn} value="fourth" onClick={() => {newsFetch('/australia')}}>Australia
                    <Icon>
                        <img className={classes.countryIcon} src={auflag} alt=""/>
                    </Icon>
                </ToggleButton>

                <ToggleButton className={classes.btn} value="fifth" onClick={() => {newsFetch('/japan')}}>Japan 
                    <Icon>
                        <img className={classes.countryIcon} src={jpflag} alt=""/>
                    </Icon>
                </ToggleButton>

                <ToggleButton className={classes.btn} value="sixth" onClick={() => {newsFetch('/saudiarabia')}}>Saudi Arabia 
                    <Icon>
                        <img className={classes.countryIcon} src={saflag} alt=""/>
                    </Icon>
                </ToggleButton>

                <ToggleButton className={classes.btn} value="seventh" onClick={() => {newsFetch('/china')}}>China 
                    <Icon>
                        <img className={classes.countryIcon} src={cnflag} alt=""/>
                    </Icon>
                </ToggleButton>
            </ToggleButtonGroup>    
        </Container>
      </div>
     );
}
 
export default Countries;