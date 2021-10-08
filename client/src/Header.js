import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const Header = () => {
    
    const useStyles = makeStyles(theme => ({
        header: {
            textAlign: "center", 
          },
        toolbar: {
            display: "flex",
        },    
        logo: {
            marginTop: 4,
            paddingLeft: 5,
          },
        date: {
            marginLeft: "auto",
        },
        offset: theme.mixins.toolbar,
      }))

    const classes = useStyles();

    const date = new Date();

    return (
        <div className={classes.header}>  
            <AppBar elevation={0}>
                <Toolbar className={classes.toolbar}>
                            <Typography variant="h6">News App</Typography>
                                <WhatshotIcon className={classes.logo}></WhatshotIcon>
                            <Typography className={classes.date} variant="subtitle2">
                                {date.toDateString()}
                            </Typography>      
                </Toolbar>  
            </AppBar>
            <div className={classes.offset} />
            <br />
            <Typography variant="h3" gutterBottom>Let's read the news..</Typography>
        </div> 
     );
}
 
export default Header;