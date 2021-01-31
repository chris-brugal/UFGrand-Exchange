import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Post from './Post/Post';
import useStyles from './styles';

<<<<<<< Updated upstream
const Posts = ({setCurrentId}) => {
=======
const Posts = () => {
    // const posts = [
    //     {creator:'k', createdAt:'as',wantedClass:'hello'}, {wantedClass:'hello'},
    // ]
>>>>>>> Stashed changes
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return(
        !posts.length ? <CircularProgress className={classes.spinnyboi} /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                { posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;
