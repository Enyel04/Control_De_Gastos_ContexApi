import { DraftCantidad,Gastos } from "../types"

import { v4 as uuidv4 } from "uuid"

export type PresupuestoAction=
    {type: 'add-presupuesto',payload:{presupuesto:number}} |
    {type: 'ver-modal'} |
    {type: 'close-modal'} |
    {type: 'add-gastos',payload:{gastos:DraftCantidad}} 


export type PresupuestoState={
    presupuesto:number
    modal:boolean
    gastos:Gastos[]
}

export const initialState : PresupuestoState= {

    presupuesto:0,
    modal:false,
    gastos:[]
 

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
            modal:false
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

    return state
    }