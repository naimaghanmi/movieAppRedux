import React from 'react';
import {connect} from "react-redux";
import {delete_movie} from "../action/action";
import Rate from './Rate';
import Edit from './edit';
import {Link} from 'react-router-dom';

const Card=({list,delete_movie})=>{
  const mystyle={
    width: "200px",
    height:"450px",
    border: '2px solid pink',
    textAlign: 'center',
    margin:"10px",
    boxShadow: "10px 5px 5px pink"
  }
 const style_img={
   display:"block",
   height:"190px",
   width:"180px",
   marginLeft:"10px",
   marginRigth:"10px"
 }
  // const movieList=movie.filter(el=>{
  //   return el.id===Number(props.match.params.id)
  // })
    return(
        <div className="Card-style">
        <div class="card"  style={mystyle}>
        <h1 class="card-title" style={{color:"	#FF0000",fontSize:"22px"}}>{list.name}</h1>
        <img src={list.src} class="card-img-top" alt="..."style={style_img} />
        <div class="card-body">
        <h3 class="card-text">{list.year} </h3>  
        <Rate starIndex={() => {}} rate={list.rate}/>
        </div>
        <div > 
        <Link to={`/description/${list.id}`}>      
      <button type="button" class="btn btn-secondary" style={{marginBottom:"5px"}}>Description</button>
     </Link>
         <div style={{display:"flex",justifyContent:"space-between",margin:"5px"}}>
         <button type="button" class="btn btn-secondary" onClick={()=>{delete_movie(list.id)}} style={{backgroundColor:"pink",border:'none'}}>Delete</button>
         <Edit idMovie={list.id}/>
         </div>
        </div>
      </div>
      </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
  return {
  delete_movie:(payload)=>dispatch(delete_movie(payload))
    

  }
}

export default connect (null,mapDispatchToProps) (Card)
