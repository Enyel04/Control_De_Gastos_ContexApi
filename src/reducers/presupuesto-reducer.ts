export type PresupuestoAction=
    {type: 'add-presupuesto',payload:{presupuesto:number}}


export type PresupuestoState={
    presupuesto:number
}

export const initialState : PresupuestoState= {

    presupuesto:0

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

    return state
    }