import React from 'react';
import { Grid, Container, IconButton, Typography, AppBar, Toolbar, InputBase, MenuItem, Menu}  from '@material-ui/core';

import Navbar from './components/NavBar/NavBar';
import useStyles from './styles'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <Navbar />
        <Container>
            <Grid container alignItems="stretch" spacing={5}>
                <Grid container item xs={8}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

