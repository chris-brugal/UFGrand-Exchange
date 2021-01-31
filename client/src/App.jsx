import React from 'react';
import { Grid, Container}  from '@material-ui/core';

import Navbar from './components/NavBar/NavBar';
import useStyles from './styles'
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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

