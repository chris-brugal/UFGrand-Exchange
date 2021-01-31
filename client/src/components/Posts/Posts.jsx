import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import useStyles from './style'

const SimpleCards = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles(); 

  return(
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6}>
                  <Post post={post} />
              </Grid>
          ))}
      </Grid>

    )
  );
}

export default SimpleCards;


// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.titleCards} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }