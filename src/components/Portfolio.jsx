import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
Box,
Grid,
Typography,
Card,
CardActionArea,
CardActions,
CardMedia,
CardContent,
Button
} from "@material-ui/core";
import Navbar from './Navbar';

const useStyles=makeStyles({
    mainContainer:{
        background:"#29093A",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        // margin:"8rem",
        margin:"3rem",
        marginBottom:"auto"
    }
})

const Portfolio = () => {
    const classes=useStyles();         
  return (
    <Box component='div' className={classes.mainContainer}>
        <Navbar />
        <Grid container justifyContent="center" >
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project-1"
                    height="200"
                    image={"./react.webp"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project-1
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary"component="p">
                        A React based project Expense tracker, that is a personal finance project that helps users keep track of their expenses and income in order to manage their budget effectively. It involves building a web or mobile application that enables users to enter their expenses, categorize them, and view their spending habits over time.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color="primary" onClick={() => window.open('https://kbexpensetracker.surge.sh/', '_blank')}>
                        View
                        </Button>
                        <Button size="small" variant="contained" color='primary'>
                            Completed
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project-2"
                    height="200"
                    image={"./airbnb.png"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project-2
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        A React-based Airbnb clone is a project that replicates the  design of Airbnb using the React framework. It involves building a web application for users to book, view and manage accommodations.The interface should display property details such as pricing, amenities, and reviews.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color="primary" onClick={() => window.open('https://myyairbnbclone.surge.sh/', '_blank')}>
                            View
                        </Button>
                        <Button size='small' variant="contained" color='primary'>
                            Completed
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project-3"
                    height="200"
                    image={"./pharmpic.jpeg"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project-3
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary"component="p">
                        Python-based pharmacy management system is a project that automates the management of pharmaceutical operations. It involves building a desktop or web application that allows pharmacists to manage inventory, sales, and customer data. The project requires skills in Python, databases, and GUI frameworks. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color="primary" onClick={() => window.open('https://github.com/khushbakhtkhan1/Pharmacy-Management-System', '_blank')}>
                            View
                        </Button>
                        <Button size='small' variant="contained" color='primary'>
                            Completed
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project-4"
                    height="200"
                    image={"./space.png"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project-4
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary"component="p">
                        A Python-based space shooter game is a project that involves building a 2D game with graphics and sound effects. Players control a spacecraft and shoot down enemy spaceships while avoiding obstacles. The game requires skills in Python and game development libraries such as Pygame. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color="primary" onClick={() => window.open('https://github.com/khushbakhtkhan1/Space-Shooter-Game', '_blank')}>
                            View
                        </Button>
                        <Button size='small' variant="contained" color='primary'>
                            Completed
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
        </Grid>
    
    </Box>
  )
}

export default Portfolio