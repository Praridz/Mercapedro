import React from 'react';
import './App.css';
import Buscador from './cmponentes/Buscador';
import Resultado from './cmponentes/Resultado';
import LOGO1 from './LOGO1.PNG';
class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      entrada:'',
      productos: [],
      pagina: '',
      firstSearch: true
    }

  }



  paginaAnterior = ()=>{   
    if(this.state.pagina==0){
      return null;
     
  } 
    console.log("Regresando");
    let pagina= this.state.pagina;
    pagina-=50;
    this.setState({pagina},
      ()=>{this.componentDidMount(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.entrada}&offset=${this.state.pagina}`)
        
      });
    
  }
  paginaSiguiente = () => {
    console.log("Avanzando");
    let pagina= this.state.pagina;
    pagina=pagina+50;
    this.setState({pagina},
      ()=>{this.componentDidMount(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.entrada}&offset=${this.state.pagina}`)
       
      });
  }


  async componentDidMount(api) {
     
    
    const response = await fetch  (api);
    const data = await response.json();
    this.setState({ productos: data.results});
    console.log(api)

  }

  entradaBusqueda = (entrada) =>{
    this.setState({
      entrada
    },()=>{
      this.setState({
        pagina:0 
     })
      this.componentDidMount(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.entrada}`);	

      
    })

  }
  render(){
    return (
      <div className="App"> 
      <img src={LOGO1}  />
      <h1>Rios Dominguez</h1>
      <div className="app container">
   
          <p className="lead text-center">
          </p>
          
          <Buscador 
          entradaBusqueda  ={this.entradaBusqueda}          
          />
    
        <div className="row justify-content-center ">
        <Resultado 
            firstSearch={this.firstSearch}
            productos={this.state.productos} 
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            />
            </div>
      </div>
      </div>
    );
  }
}


export default App;