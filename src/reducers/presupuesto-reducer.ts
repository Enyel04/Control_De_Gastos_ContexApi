export type PresupuestoAction=
    {type: 'add-presupuesto',payload:{presupuesto:number}} |
    {type: 'ver-modal'} |
    {type: 'close-modal'} 


export type PresupuestoState={
    presupuesto:number
    modal:boolean
}

export const initialState : PresupuestoState= {

    presupuesto:0,
    modal:false

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

    return state
    }