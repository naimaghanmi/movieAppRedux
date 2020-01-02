import React from "react";
import {connect} from "react-redux"
import{Link} from "react-router-dom"
import Rate from './Rate'
import {Icon} from 'antd'
function description(props){
     const movie=(props.movies.filter(e=>
     e.id === Number(props.match.params.id)))[0];    
  return (
    <div> 
     <Link to='/'><Icon type="left-square" style={{backgroundColor:"#00FFFF",color:"gray",fontSize:'35px'}}/></Link>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"50px"}}>
    <div>
<img src={movie.src} style={{width:"180px",height:"180px"}}/>
    </div>
    <div style={{margin:"50px"}}>
        <h1 style={{color:"red"}}>{movie.name}</h1>
        <Rate rate={movie.rate}/>

        <p style={{color:"gray"}}>{movie.des}</p>
    </div>

    </div>
    </div>

  )

 }
const mapStateToProps=state=>({
movies:state.movie
})
 export default connect(mapStateToProps)(description)