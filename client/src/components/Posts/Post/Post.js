import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    return(
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6" color="primary">{post.name}</Typography>
                <Typography variant="body2" color="primary">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?._id === post?.creator) && (
                <div className={classes.overlay2}>
                <Button style={{color: 'black'}} size="small" onClick={() => dispatch(deletePost(post._id))}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            )}
            
            <CardContent>
                <Typography className={classes.wantedClass} variant="h5" gutterBottom>{post.wantedClass}</Typography>
                <Typography className={classes.description} variant="h5" gutterBottom>{post.description}</Typography>
                <Typography className={classes.desiredSection} variant="h5" gutterBottom>{post.desiredSection}</Typography>
            </CardContent>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                {(user?.result?._id === post?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" /> Delete
                </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post;