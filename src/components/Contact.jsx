import React, { useState } from 'react';
import {TextField,Button} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: "",
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value, })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullName},My mobile no is ${data.phone},My email is ${data.email},and My message is ${data.msg}`);
    }

    const classes = useStyles();
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto" style={{"textAlign": "center"}}>
                        <form onSubmit={formSubmit} className={classes.root}>
                            <TextField
                                id="standard-required"
                                label="Full Name"
                                type="text"
                                autoComplete="current-password"
                                name="fullName"
                                value={data.fullName}
                                onChange={(e) => inputEvent(e)}
                                style={{ "marginBottom": "10px" }}
                            />
                            <br />
                            <TextField
                                id="standard-password-input"
                                label="Phone No"
                                type="number"
                                autoComplete="current-password"
                                name="phone"
                                value={data.phone}
                                onChange={(e) => inputEvent(e)}
                                style={{ "marginBottom": "10px" }}
                            />
                            <br />
                            <TextField
                                id="standard-password-input"
                                label="Email"
                                type="email"
                                autoComplete="current-password"
                                name="email"
                                value={data.email}
                                onChange={(e) => inputEvent(e)}
                                style={{ "marginBottom": "10px" }}
                            />
                            <br />
                            <TextField
                                id="standard-textarea"
                                label="Your Message"
                                placeholder="Message"
                                multiline
                                rows={4}
                                name="msg"
                                value={data.msg}
                                style={{ "marginBottom": "10px" }}
                            />
                            <br />
                            <Button variant="contained" color="primary" onClick={formSubmit}>
                                Primary
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;