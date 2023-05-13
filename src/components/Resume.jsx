import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles=makeStyles(theme=>({
    mainContainer:{
        background:"#29093A"
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:"1px solid #D5BCFA",
            right:"40px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50%-1px)",
                right:"50%"
            }
        }
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom:"2px solid #D5BCFA",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"absolute"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50%-5px)",
            borderStyle:"solid",
            borderColor:"#B15DDD #B15DDD transparent transparent",
            borderWidth:"0.825rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"#D5BCFA"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent #B15DDD #B15DDD"
            }
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"#B15DDD",
        color:"white",
        lineHeight:1,
        padding:"0.5 rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        }
    },
    heading:{
        color:"#B15DDD",
        padding:"3rem 0",
        textTransform:"uppercase"
    },
    subheading:{
        color:"white",
        padding:"0",
        textTransform:"uppercase"
    }
}));

const Resume = () => {
    const classes=useStyles();
  return (
    <>
    <Navbar />
    <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
            Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2021-2025</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                    Software Engineering
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                Ned University of engineering and technology, Karachi
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                CGPA(as of 1st year) : 3.67 / 4.00
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2021</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                   Pre-Engineering HSC(II)
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                St. Lawrence Govt Girls Degree College, Karachi
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Secured 95% / 100%
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                   Science Group SSC(II)
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                Little Folk's School, Karachi
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
               Secured 85% / 100%
                </Typography>
            </Box>
            
        </Box>
        <Typography variant="h4" align="center" className={classes.heading}>
            What I Do
        </Typography>
        <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>1st</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                    Web Design
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                Web Design Fundamentals and Bootstrap
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Exploring the World of Color Theory: Using Color to Convey Emotions and Branding on Websites.Crafting Seamless User Experiences Across Devices
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2nd</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                    HTML & CSS
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                Web Design with HTML/CSS
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Discovering the Fundamentals of HTML5: Creating Semantic and Accessible Websites.Building Custom Forms with HTML and CSS: Collecting User Data Effectively.Discovering the Power of CSS Grid: Creating Dynamic Layouts with Ease
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>3rd</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                    React Js
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                React for Front-End Development
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Mastering React Components: Building Reusable UI Elements with Ease
.Discovering the Power of React Hooks: Simplifying State Management and Side Effects
.Learning React Context API: Sharing Data Across Components without Prop Drilling.
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>4th</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                    Data Science
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                Data Science with Python Tools
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Implementing Data Preprocessing Techniques: Cleaning and Preparing Data for Analysis.Applying Data Science Techniques to Business Problems: Identifying Insights and Opportunities.
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>5th</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                    SQL/MySQl
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#v"}} >
                Data Modeling with SQL
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Using SQL for Data Analysis: Querying and Joining Databases for Insights.Understanding SQL Stored Procedures: Creating Reusable Blocks of Code for Database Tasks
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>6th</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5"
                align="center"
                className={classes.subheading}
                >
                   Python
                </Typography>
                <Typography variant="body1" align="center" style={{color:"#B15DDD"}} >
                Python for Data Science Foundations 
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"#D5BCFA"}}>
                Exploring Python Libraries: Utilizing Pandas, NumPy, and Matplotlib for Data Analysis and Visualization.Understanding Python Control Flow: Implementing Conditional Statements and Loops for Program Control
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Resume