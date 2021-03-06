import React from 'react'

class Buscador extends React.Component{ 
    busquedaRef= React.createRef();
    obtenerDatos = (e)=>{
        e.preventDefault();
        this.props.entradaBusqueda(this.busquedaRef.current.value);
    }
    render(){
        return (
            <form onSubmit={this.obtenerDatos}>
                
            <div className="row">
                <div className="form-group col-md-11">
                    <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Ingrese el producto a buscar"/>
                </div>
                <div className="form-group col-md-1">
                    <input type="submit" className="btn btn--lg btn-block btn-info"  value="Buscar"/>
                </ div>
            </div>
        </form>
        );
    }
}

export default Buscador;