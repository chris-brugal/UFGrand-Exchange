import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Post = () => {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6"{...post.creator} />
                <Typography variant="body2"{...moment(post.createdAt).fromNow()}></Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontsize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>

    )
}

export default Post;