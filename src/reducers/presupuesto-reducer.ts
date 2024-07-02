
import { Category, DraftCantidad,Gastos } from "../types"

import { v4 as uuidv4 } from "uuid"

export type PresupuestoAction=
    {type: 'add-presupuesto',payload:{presupuesto:number}} |
    {type: 'ver-modal'} |
    {type: 'close-modal'} |
    {type: 'add-gastos',payload:{gastos:DraftCantidad}} |
    {type: 'remove-gasto',payload:{id:Gastos['id']}} |
    {type:'get-gastos-by-id', payload:{id:Gastos['id']}} |
    {type:'actualizar-gasto', payload:{gastos:Gastos}} |
    {type:'resetear'} |
    {type:'add-filtrado-categoria', payload:{id:Category['id']}}


export type PresupuestoState={
    presupuesto:number
    modal:boolean
    gastos:Gastos[]
    editandoID:Gastos['id']
    currentCategory:Category['id']
}

//Inicia el presupuesto vacio, si no hay nada, retorna en vacio, si hay algo, retorna lo guardado, esto es para el presupuesto
const initialPresupuesto =() : number => {
    const localStoragePresupuesto= localStorage.getItem('presupuesto')
    return localStoragePresupuesto ? +localStoragePresupuesto : 0
  
}

//Tomando los gastos guardarlo en Json, para proceder a guardarlo en localStorage

const localStorageGastos = (): Gastos[] => {
  const localStorageGastos = localStorage.getItem('gastos')
  return localStorageGastos ? JSON.parse(localStorageGastos): []
}

export const initialState : PresupuestoState= {

    presupuesto:initialPresupuesto(),
    modal:false,
    gastos:localStorageGastos(),
    editandoID:'',
    currentCategory:''
 

}

const crearGastos= (DraftCantidad :DraftCantidad) :Gastos => {

    return {
        ...DraftCantidad,
        id:uuidv4()
    }
  
}

export const PresupuestoReducer= (
    state: PresupuestoState= initialState,
    action: PresupuestoAction
    ) => {

        if (action.type==='add-presupuesto') {
            
            return {
                ...state,
                presupuesto:action.payload.presupuesto
            }
        }

    if (action.type==='ver-modal') {
        return{
            ...state,
            modal:true
        }
        
    }
    if (action.type==='close-modal') {
        return{
            ...state,
            modal:false,
            editandoID:''
        }
        
    }
    if (action.type==='add-gastos') {

        const gastos= crearGastos(action.payload.gastos)

        return{
            ...state,
            gastos:[...state.gastos,gastos],
            modal:false

        }    
    }
    if(action.type==='remove-gasto'){

        return{
            ...state,
            gastos:state.gastos.filter(gastos=> gastos.id !==action.payload.id)
        }
    }
    //Tomar ID del gasto y mostrarlo
    if (action.type==='get-gastos-by-id') {
        return{
            ...state,
            editandoID:action.payload.id,
            modal:true
        }
        
    }
    //Agregar o actualizar el gasto
    if (action.type==='actualizar-gasto') {
        return{
            //Se toma la copia del state, se busca el Id que tiene y lo hara igual al siguiente id que muestre
            ...state,                                                           //payload, compara el gasto con el otro gasto
            gastos:state.gastos.map(gastos=> gastos.id===  state.editandoID ? action.payload.gastos:gastos
            ),
            modal:false,
            editandoID:''
        }
    }

    if (action.type==='resetear') {

        //Se toma el state inicial y se reenvia para aca, para colocarlo todo en 0

        return{
            ...state,
            presupuesto:0,
            gastos:[]
 
        }
        
    }
    if (action.type==='add-filtrado-categoria') {
        return{
            ...state,
            currentCategory:action.payload.id
        }
    }

    

    return state
    }