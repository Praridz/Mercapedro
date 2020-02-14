import React, {Component} from 'react';
import Producto from "./Producto";


class Resultado extends React.Component{

    mostrarImagenes=()=>{
        
        const imagenes= this.props.imagenes;
        if(imagenes.length===0){
            return null;
        } 
        console.log(imagenes);

        return (
            <React.Fragment>
                <div className="col-s12 p-8 row">
                    {
                        imagenes.map(imagen=>(
                            <Producto
                            key={imagen.id}
                            producto={imagen}
                            />
                        ))
                    }
                </div>
               
            </React.Fragment>
        )

    }

    render(){
        return (
            <React.Fragment>{this.mostrarImagenes()}</React.Fragment>
            )
    }
}

export default Resultado;