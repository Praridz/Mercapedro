import React from 'react';

const Pagina = props => {

    return(
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">&larr; Página Anterior </button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info mr-1"> &rarr; Siguiente Página</button>
        </div>
    )
}

export default Pagina;