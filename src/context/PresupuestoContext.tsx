import { useReducer, createContext, Dispatch, ReactNode } from "react"

import { PresupuestoReducer,PresupuestoState ,initialState,PresupuestoAction } from "../reducers/presupuesto-reducer"


//Primero se define el Context 
type PresupuestoContextProps={

        state: PresupuestoState
        dispatch:Dispatch<PresupuestoAction>
    
}
//Creando el Props de Children
type PresupuestoProveedorProps ={

        children: ReactNode
}


//Luego creamos el contex con createContext
export const PresupuestoContext=createContext<PresupuestoContextProps>(null! )
//Que el presupuesto tenga el Dispatch creamos el Props de Children

export const PresupuestoProveedor= ({children}: PresupuestoProveedorProps ) => {

        const [state,dispatch] =useReducer(PresupuestoReducer,initialState)
        return(

                <PresupuestoContext.Provider
                        value={{
                               state,
                               dispatch
                        
                        }}
                >
                        {children}
                </PresupuestoContext.Provider>

        )
}