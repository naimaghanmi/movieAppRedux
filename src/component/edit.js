import { Modal, Button } from 'antd';
import React, { Component } from "react";
import {connect} from "react-redux";
import {edit_movie} from "../action/action"

class Edit extends React.Component {
  state = { visible: false ,
    name: "",
    rate: 0,
    src: "",
    year: ""
};
handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <button type="primary"  style={{width:"75px",height:"50px",backgroundColor:"pink",border:'none',color:"white"}}onClick={this.showModal}>
        edit
        </button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
    <div style={{display:"block"}}> 
    <input type="text" name="name" id="title" onChange={this.handleChange} />
    
     <input type="text" name="src" id="image" onChange={this.handleChange} />
     <input type="number" name="year"  id="year" onChange={this.handleChange} />   
     <input  type="number" name="rate" id="rate" onChange={this.handleChange} />    
     <button  onClick={()=>{this.props.edit_movie(this.props.idMovie,this.state)
                  }}> update</button>         
      </div>
          
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        edit_movie:(id,payload)=>dispatch ( edit_movie(id,payload)),


    }
}

export default connect(null,mapDispatchToProps)(Edit)