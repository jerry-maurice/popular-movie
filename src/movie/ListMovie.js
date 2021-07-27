import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as MovieAPI from './../utils/MovieDBAPI';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function ListMovie (props){
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            {props.movies.map((movie)=>(
                <Grid key={movie.id} item xs={4}>
                    <Paper className={classes.paper}>
                        <img  src={MovieAPI.getMovieImage(movie.poster_path)} alt={movie.title} ></img>
                    </Paper>
                </Grid>
            ))}
          
        </Grid>
      </div>
    );
}

ListMovie.protoTypes = {
    movies:PropTypes.array.isRequired
}

export default ListMovie