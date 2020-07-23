import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/" style={{ "float": "left", "padding": "5px", "color": "white", "textDecoration": "none" }}>Mustafa's Tech</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none" }}>Home</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="about" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none" }}>About</Link>
                        </Typography>
                        <Typography>
                            <Link to="contact" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none", "fontWeight": "bold" }}>Contact</Link>
                        </Typography>
                        <Typography>
                            <Link to="project" style={{ "float": "right", "padding": "5px", "color": "white", "textDecoration": "none", "fontWeight": "bold" }}>Projects</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Navbar;