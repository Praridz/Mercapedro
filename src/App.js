import React from 'react';
import './App.css';
import Buscador from './cmponentes/Buscador';
import Resultado from './cmponentes/Resultado';
class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      entrada:'',
      imagenes: [],
    }

  }

  async componentDidMount() {
     
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${this.state.entrada}`;
    const response = await fetch  (url);
    const data = await response.json();
    this.setState({ imagenes: data.results});


  }

  entradaBusqueda = (entrada) =>{
    this.setState({
      entrada
    },()=>{
      this.componentDidMount();	
    })

  }
  render(){
    return (
      
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de Imágenes
          </p>
          <Buscador 
          entradaBusqueda  ={this.entradaBusqueda}          
          />
        </div>
          <Resultado imagenes={this.state.imagenes}/>
      </div>
    );
  }
}


export default App;
