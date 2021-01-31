import React, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', wantedClass: '', description: '', tags: '', desiredSection: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
        /*
        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
        */ 
    }

    const clear = () => {
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    };

    /*
    //to make sure that the user is logged in before they can edit/create posts
    if (!user?.result?.name) {
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please sign in to create your own post.
            </Typography>
          </Paper>
        );
      }
      */

    return(
        <Paper className={classes.paper}>
            <form autoComplete ="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">What class do you wish for?</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            <TextField name="wantedClass" variant="outlined" label="Wanted Class" fullWidth value={postData.wantedClass} onChange={(e) => setPostData({ ...postData, wantedClass: e.target.value })}/>
            <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
            <TextField name="desiredSection" variant="outlined" label="Desired Section" fullWidth value={postData.desiredSection} onChange={(e) => setPostData({ ...postData, desiredSection: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>SUBMIT</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>CLEAR</Button>
            </form>
        </Paper>
    )
}

export default Form;