import React, { Component } from 'react';
import './Kata.css';

class Kata extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  generateArray(filas, columnas){
    let printerArray = [];
    let cont = 1;

    for(let fila=0; fila < filas; fila++){
      const initArray= []
      for(let colum=0; colum < columnas; colum++){
        initArray.push(cont);
        cont++;
      }
      printerArray.push(initArray);
    }
    this.setState({printerArray: printerArray})
  }

  render() {
    return (
      <div className="Kata">
        Trabajaremos el ejercicio aqui
      </div>
    );
  }
}

export default Kata;
