  import React from 'react';
  import './App.css';
  import TablePermutation from './TablePermutation.js' 

  class App extends React.Component{

    state = { }

    constructor(props){
      super(props);
      this.state = {listaNumeros: [] , numeros: '' }
      this.addNumber = this.addNumber.bind(this);
      this.limpiar = this.limpiar.bind(this);
      this.cargarDatos = this.cargarDatos.bind(this);
    }

   addNumber = e =>{
        const tam = this.state.numeros.length;
         if( tam < 11)
        {
          this.setState({numeros:''+ this.state.numeros+ e.currentTarget.value});
        }else{
          alert('No puede ingresar más números');
        }
      }

  cargarDatos(){
    const num = this.state.numeros;
    if(num === ''){
      alert('Por favor digite un número');
    }
    else{
      fetch('/api/'+ num)
      .then(function(response){
        return response.json();
      })
      .then((myJson) =>{
        this.setState({listaNumeros:myJson});
      });
    }
  }

  limpiar(){
    this.setState({numeros:'' });
  }


    render(){

    return (
    <div className="App ">
      <img src= 'https://dexon.us/build/assets/images/07/LogoDexonCompleto.png' className = 'imagen col-lg-12 col-md-12 col-sm-12 col-12 col-centered'/>
      <h1 className = 'numero col-lg-12 col-md-12 col-sm-12 col-12 col-centered'>{this.state.numeros} </h1>
    <table className = 'telefono  col-centered'>
    <tr >
      <td>
        <button value="1" className=" btn btn-outline-dark  " onClick ={this.addNumber}>1
          <span>. , !</span>
        </button>
      </td>
      <td>
        <button value="2" className=" btn btn-outline-dark"  onClick ={this.addNumber}>2
          <span>a b c</span>
        </button>
      </td>
      <td>
        <button value="3" className=" btn btn-outline-dark"  onClick ={this.addNumber}>3
          <span>d e f</span>
        </button>
      </td>
    </tr>
    <tr >
      <td>
        <button value="4" className=" btn btn-outline-dark"  onClick ={this.addNumber}>4
          <span>g h i</span>
        </button>
      </td>
      <td>
        <button value="5" className=" btn btn-outline-dark"  onClick ={this.addNumber}>5
          <span>j k l</span>
        </button>
      </td>
      <td>
        <button value="6" className=" btn btn-outline-dark"  onClick ={this.addNumber}>6
          <span>m n o</span>
        </button>
      </td>
    </tr>
    <tr >
      <td>
        <button value="7" className=" btn btn-outline-dark"  onClick ={this.addNumber}>7
          <span>p q r s</span>
        </button>
      </td>
      <td>
        <button value="8" className=" btn btn-outline-dark"  onClick ={this.addNumber}>8
          <span>t u v</span>
        </button>
      </td>
      <td>
        <button value="9" className=" btn btn-outline-dark"  onClick ={this.addNumber}>9
          <span>w x y z</span>
        </button>
      </td>
    </tr>
    <tr >
      <td>
        <button value="*" className=" btn btn-outline-dark" disabled  >*</button>
      </td>
      <td>
        <button value="0" className=" btn btn-outline-dark" disabled >0</button>
      </td>
      <td>
        <button value="#" className=" btn btn-outline-dark" disabled >#</button>
      </td>
    </tr>
    </table>
        <button id = 'ir' className = 'btn btn-dark' onClick={this.cargarDatos}>ir</button>
        <button id = 'ir' className = 'btn btn-danger' onClick={this.limpiar}>limpiar</button>
      
    <div  className="table-wrapper-scroll-y my-custom-scrollbar table  col-lg-12 col-md-12 col-sm-12 col-12 col-centered ">
    <table className="table  table-bordered table-striped mb-0">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Combinaciones</th>
      </tr>
    </thead>
      {this.state.listaNumeros.map((letras, index) =>( 
     <TablePermutation key={index} value ={letras}/>)
    )}
    </table>
    </div>
    </div>
      );
    }
  }
  export default App;
