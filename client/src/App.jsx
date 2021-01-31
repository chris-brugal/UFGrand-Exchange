import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Card from './components/SimpleCard';
import memories from './images/memories.png';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
const App = () => {
    const classes = useStyles();
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="sticky" color="inherit">
                <Typography className={classes.heading} varient="h2" align="center">Class Exchange</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
                <Button className={classes.Button} variant="contained" color="primary">Search</Button>
                <Button className={classes.Button} variant="contained" color="primary">
                    Login
                </Button>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={4}>
                            <Card/>
                            <Card/>
                            <Card/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App