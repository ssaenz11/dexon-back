import React from 'react';
import logo from './logo.svg';
import './App.css';

class tablePermutation extends React.Component {

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <tbody>
        <tr>
          <td>{this.props.value}</td>
        </tr>
      </tbody> 
      );
    }
  }

export default tablePermutation;
