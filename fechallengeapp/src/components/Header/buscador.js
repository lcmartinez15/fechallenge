import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { realizarBusqueda } from '../../redux/actions/busqueda';


export const Buscador = () => {
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(realizarBusqueda());
      };

  return (
    <div>                         
    <button onClick={onSubmit}>Buscar</button>
    </div>  )
}
