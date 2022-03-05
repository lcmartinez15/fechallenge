import { SET_ERROR, SET_ITEM, SET_RESULTADO } from "../constantes";

  
  const initialState = {
    itemActual: null,    
    listaItems: [],
    loading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
      case SET_RESULTADO:
        return {
          ...state,
          listaItems: payload,
          loading: false,
          itemActual: null,
        };
      case SET_ITEM:
        return {
          ...state,
          itemActual: payload,
          loading: false,          
        };
      
      case SET_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          listaItems: { courses: [] },
          itemActual: null,
        };      
     
      default:
        return state;
    }
  }
  