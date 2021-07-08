import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessIcon from '@material-ui/icons/Business';
import GavelIcon from '@material-ui/icons/Gavel';
import CasinoIcon from '@material-ui/icons/Casino';
import PublicIcon from '@material-ui/icons/Public';


const Categories = ({ data, apiKey, apiFetch}) => {

  const [color, setColor] = useState([])

  const useStyles = makeStyles({
    btn: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 15,
        '&:hover': {
            backgroundColor: "#132a69",
        }
    }
})

  const classes = useStyles()

  const toggleColor = (event, newColor) => {
      setColor(newColor);
  };

    return ( 
      <div>
        <h2>Categories</h2>
        <br />
          <ToggleButtonGroup className="categories" variant="contained" size="large" value={color}
                        exclusive
                        onChange={toggleColor} >

                        <ToggleButton className={classes.btn} value="first" color="primary" endIcon={<AnnouncementOutlinedIcon />} onChange={toggleColor} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=covid&apiKey=${apiKey}`)}}>Coronavirus</ToggleButton>

                        <ToggleButton className={classes.btn} value="second" color="primary" endicon={<CasinoIcon />} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=entertainment&apiKey=${apiKey}`)}}>Entertainment</ToggleButton>

                        <ToggleButton className={classes.btn} value="third" variant="contained" type="button" endIcon={<BusinessIcon />} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=business&apiKey=${apiKey}`)}} >Business</ToggleButton>

                        <ToggleButton className={classes.btn} value="fourth" endIcon={<SportsBasketballIcon />} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`)}}>Sports</ToggleButton>

                        <ToggleButton className={classes.btn} value="fifth" endIcon={<ComputerIcon />} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`)}}>Technology</ToggleButton>

                        <ToggleButton className={classes.btn} value="sixth" endIcon={<GavelIcon />} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`)}}>Politics</ToggleButton>

                        <ToggleButton className={classes.btn} value="seventh"endIcon={<PublicIcon />} onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=world-news&apiKey=${apiKey}`)}}>World</ToggleButton>
            </ToggleButtonGroup> 
      </div>
     );
}
 
export default Categories;
