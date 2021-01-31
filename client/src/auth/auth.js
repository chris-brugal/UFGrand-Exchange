import React from 'react'
import { Avatar, Button, Paper, Grid, Container, Typography, TextField } from '@material-ui/core'
import LockedOutlinedIcon from '@material-ui/icons/LockedOutlined'
import useStyles from './styles';
import { signin, signup } from '../actions/auth'

import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const isSignup = false;
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {
        if (isSignup) {
            dispatch(signup(formData, history));
          } else {
            dispatch(signin(formData, history));
          }
    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockedOutlinedIcon />
                </Avatar>
                <Typography component="h5">${!isSignup? 'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    {isSignup && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>)}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />  
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
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

export default auth
