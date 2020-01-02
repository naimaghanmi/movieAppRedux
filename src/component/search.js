import React, { Component } from 'react'
import {connect} from 'react-redux'
import Rate from './Rate'
import {name_filter,rate_filter} from '../action/action'

const Search =({name_filter,rate,rate_filter})=>  {


  return (
    <div style={{ display: "flex" ,margin:"20px"}} >
      <input
        type="text"
        onChange={e => {name_filter(e.target.value) }}  style={{width:"90%"}} 
      />
      <Rate rate={rate} starIndex={rate_filter}/>
    </div>
  );
}

const MapStateToProps = state => ({rate:state.findbyrate})
export default  connect(MapStateToProps,{name_filter,rate_filter})(Search)