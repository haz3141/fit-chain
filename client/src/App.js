import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


export default class App extends Component {  
  state = {    
    exercises: [],    
    title: ''  
  }
  render() {    
    return (
      <div>
        <Typography variant='h1' align='center' gutterBottom>        
        Exercises      
      </Typography>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) =>    this.setState({      [name]: value    })

}