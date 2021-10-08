import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"; 
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import GavelIcon from '@material-ui/icons/Gavel';
import CasinoIcon from '@material-ui/icons/Casino';
import PublicIcon from '@material-ui/icons/Public';


const Categories = ({newsFetch, matches}) => {

    const [color, setColor] = useState([])
    const toggleColor = (event, newColor) => {
      setColor(newColor);
    };

    const useStyles = makeStyles({
      container: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: -10,
        width: "100%"
      },
      btn: {
          backgroundColor: "#3f51b5",
          color: 'white',
          padding: 15,

          '&:hover': {
              backgroundColor: "#132a69",
          }
      },
      icon: {
          marginLeft: 10
      },
    })

    const classes = useStyles();

    return ( 
      <div>
          <Typography variant="h4" style={{textAlign: "center"}}>Categories</Typography>
          <br/> 
          <Container className={classes.container}> 
              <ToggleButtonGroup orientation={`${matches ? `horizontal` : `vertical`}`} variant="contained" size="large" value={color} exclusive onChange={toggleColor}>
                
                <ToggleButton className={classes.btn} value="first" onClick={() => {newsFetch('/coronavirus')}}>Coronavirus <AnnouncementOutlinedIcon className={classes.icon}/></ToggleButton>

                <ToggleButton className={classes.btn} value="second" onClick={() => {newsFetch('/entertainment')}}>Entertainment <CasinoIcon className={classes.icon}/></ToggleButton>

                <ToggleButton className={classes.btn} value="third" variant="contained" onClick={() => {newsFetch('/business')}}>Business<BusinessIcon className={classes.icon}/></ToggleButton>

                <ToggleButton className={classes.btn} value="fourth" onClick={() => {newsFetch('/sports')}}>Sports <SportsBasketballIcon className={classes.icon}/></ToggleButton>

                <ToggleButton className={classes.btn} value="fifth" onClick={() => {newsFetch('/technology')}}>Technology <ComputerIcon className={classes.icon}/></ToggleButton>

                <ToggleButton className={classes.btn} value="sixth" onClick={() => {newsFetch('/politics')}}>Politics <GavelIcon className={classes.icon}/></ToggleButton>

                  <ToggleButton className={classes.btn} value="seventh" onClick={() => {newsFetch('/world')}}>World <PublicIcon className={classes.icon}/></ToggleButton>
              </ToggleButtonGroup>     
        </Container>
      </div>
     );
}
 
export default Categories;
