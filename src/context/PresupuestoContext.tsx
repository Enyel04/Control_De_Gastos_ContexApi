import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"

import { PresupuestoReducer,PresupuestoState ,initialState,PresupuestoAction } from "../reducers/presupuesto-reducer"


//Primero se define el Context 
type PresupuestoContextProps={

        state: PresupuestoState
        dispatch:Dispatch<PresupuestoAction>
        totalGastos:number
        disponiblePresupuesto:number

    
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

        const totalGastos=useMemo(() => 
        state.gastos.reduce((total,gastos)=>
                gastos.cantidad  +total, 0), [state.gastos] )

        const disponiblePresupuesto= state.presupuesto - totalGastos


        return(

                <PresupuestoContext.Provider
                        value={{
                               state,
                               dispatch,
                               totalGastos,
                               disponiblePresupuesto
                        
                        }}
                >
                        {children}
                </PresupuestoContext.Provider>

        )
}