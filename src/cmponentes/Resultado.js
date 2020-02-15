  
import React, {Component} from 'react';
import Producto from "./Producto";
import Pagina from "./Pagina";


class Resultado extends React.Component{

    mostrarProductos=()=>{
        
        const productos= this.props.productos;
        const firstSearch= this.props.firstSearch;
        if(productos.length===0){
            return null;
        } 
        console.log(productos);

        return (
            <React.Fragment>
                 <Pagina
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}

                />
                <div className="col-s12 p-8 row">
                    {
                        productos.map(unproducto=>(
                            <Producto
                            key={unproducto.id}
                            producto={unproducto}
                            />
                        ))
                    }
                </div>
                <Pagina
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}

                />
            </React.Fragment>
        )

    }

    render(){
        return (
            <React.Fragment>{this.mostrarProductos()}</React.Fragment>
            )
    }
}

export default Resultado;