import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png';
import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="sticky" color="inherit">
                <Typography className={classes.heading} varient="h2" align="center">Class Exchange</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <h1></h1>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <h2>bye</h2>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App