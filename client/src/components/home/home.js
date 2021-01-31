import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
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
    </Grow>
  );
};

export default Home;

/*
import useStyles from './styles'
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';


  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

*/