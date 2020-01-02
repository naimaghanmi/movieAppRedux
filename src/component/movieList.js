import React from 'react'
import Card from './card'
import { connect } from "react-redux"
const MovieList = props => {
    const mystyle = {
        display:"flex",
        margin:"20px",
      
    }
    return (
        <div style={mystyle}>
         {props.movies.filter(
          e =>
            e.name.toLowerCase().includes(props.findbyname.toLowerCase()) &&
            e.rate >= props.findbyrate
        ).map(e => (
        <Card list={e} />
            ))}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        movies: state.movie,
        findbyname:state.findbyname,
  findbyrate:state.findbyrate
    }
}
export default connect(mapStateToProps)(MovieList);
