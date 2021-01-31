import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, Provider } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                { posts.map((post) => (
                    // console.log(post)
                    <Grid key={post} item xs={12} sm={6}>
                        <Post {...post} />
                    </Grid>
                    
                ))}
            </Grid>
        )
    )
}

export default Posts;