import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListMovie from './ListMovie';

export default function LayoutContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <ListMovie
            movies={props.movies}/>
      </Container>
    </React.Fragment>
  );
}

LayoutContainer.protoTypes = {
    movies:PropTypes.array.isRequired
}