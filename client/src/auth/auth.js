import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Container, Typography } from '@material-ui/core'
//import LockedOutlinedIcon from '@material-ui/icons/LockedOutlined'
import useStyles from './styles';
import { signin, signup } from '../actions/auth'

import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (isSignup) {
            dispatch(signup(formData, history));
          } else {
            dispatch(signin(formData, history));
          }
    };
    const switchMode = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>

                </Avatar>
                <Typography component ="h1" variant="h5">{!isSignup? 'Sign In':'Sign Up'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    { isSignup && (
                    <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half className={classes.Input} />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half className={classes.Input}/>
                    </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" className={classes.Input}/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} className={classes.Input}/>
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" className={classes.Input}/> }
                </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
