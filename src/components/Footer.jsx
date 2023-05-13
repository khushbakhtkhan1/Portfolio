import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles=makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250,
        },
        "& .MuiSvgIcon-root":{
            fill:"#D5BCFA",
            "&:hover":{
                fill:"#B15DDD",
                fontSize:"1.8rem",
            },
        },
    },
});

const Footer = () => {
    const classes=useStyles();
  return (
    <BottomNavigation width="auto" style={{background:"#29093A"}} >
        <BottomNavigationAction
        className={classes.root}
        style={{padding:0}}
        icon={<FacebookIcon />}
        onClick={() => window.open('https://www.facebook.com/khushbakht.khan.7792?mibextid=ZbWKwL', '_blank')}
        />
        <BottomNavigationAction
        className={classes.root}
        style={{padding:0}}
        icon={<InstagramIcon />}
        onClick={() => window.open('https://www.instagram.com/khushbakhtkhan_/', '_blank')}
        />
        <BottomNavigationAction
        className={classes.root}
        style={{padding:0}}
        icon={<LinkedInIcon />}
        onClick={() => window.open('https://www.linkedin.com/in/khushbakht-khan-b84925221/', '_blank')}
        />
        <BottomNavigationAction
        className={classes.root}
        style={{padding:0}}
        icon={<GitHubIcon />}
        onClick={() => window.open('https://github.com/khushbakhtkhan1', '_blank')}
        />
    </BottomNavigation>
  )
}

export default Footer