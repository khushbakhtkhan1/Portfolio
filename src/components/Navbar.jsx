import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
AppBar,
Toolbar,
ListItem,
IconButton,
Avatar,
Divider,
List,
Typography,
Box,
ListItemIcon
} from "@material-ui/core";
import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
} from "@material-ui/icons";
import Footer from './Footer';
import { ListItemText } from '@mui/material';

const useStyles=makeStyles(theme=>({
    menuSliderContainer:{
        width: 320,
        background:"#2C0354",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(18),
        height: theme.spacing(18)
    },
    listItem:{
        color:"#D5BCFA"
    }
}));

const menuItems=[
    {
    listIcon: <Home />,
    listText:"Home",
    listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText:"Resume",
        listPath:"/resume"
    },
    {
        listIcon: <Apps />,
        listText:"Portfolio",
        listPath:"/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText:"Contact",
        listPath:"/contact"
    }

]

const Navbar = () => {
    const [state,setState]=useState({
        right:false
    });
    const toggleSlider=(slider,open)=>()=>{
        setState({ ...state,[slider]:open});
    };
    const classes=useStyles();

    const sideList=slider=>(
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider,false)}>
            <Avatar className={classes.avatar} src="./beachy.png" alt="Khushbakht Khan"/>
            <Divider />
            <List>
                {menuItems.map((lstItem,key)=>(
                <ListItem button key={key} component={Link} to={lstItem.listPath} >
                    <ListItemIcon className={classes.listItem}>
                        {lstItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lstItem.listText} />
                </ListItem>
                ))}
            </List>
        </Box>
    )
  return (
        <>
        <Box component="nav">
            <AppBar position='static' style={{background: "#272727"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}> 
                        <ArrowBack style={{color:"#703AC0"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"#D5BCFA"}}>
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider anchor='right' open={state.right} onClose={toggleSlider("right",false)} >
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
  )
}

export default Navbar