import { useReducer, createContext, Dispatch, ReactNode } from "react"

import { PresupuestoReducer,PresupuestoState ,initialState,PresupuestoAction } from "../reducers/presupuesto-reducer"



type PresupuestoContextProps={

        state: PresupuestoState
        dispatch:Dispatch<PresupuestoAction>
    
}

type PresupuestoProveedorProps ={

        children: ReactNode
}



export const PresupuestoContext=createContext<PresupuestoContextProps>(null! )

export const PresupuestoProveedor= ({children}: PresupuestoProveedorProps ) => {

        const [state,dispatch] =useReducer(PresupuestoReducer,initialState)

        const auth= true

  
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