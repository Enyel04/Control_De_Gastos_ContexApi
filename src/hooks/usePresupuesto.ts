import { useContext } from "react"
import { PresupuestoContext } from "../context/PresupuestoContext"

export const usePresupuesto= () => {

    const context= useContext(PresupuestoContext)

    if (!context) {
        throw new Error("usePresupuesto  en el PresupuestoContext, tienes que rodearlo sobre App")
    }

    return context
  
}