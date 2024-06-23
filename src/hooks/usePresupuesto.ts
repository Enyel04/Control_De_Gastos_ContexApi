import { useContext } from "react"
import { PresupuestoContext } from "../context/PresupuestoContext"
//Se crea el custom hook para mostrar la ventana de error y estar asegurado que muestre un provider
export const usePresupuesto= () => {

    const context= useContext(PresupuestoContext)

    if (!context) {
        throw new Error("usePresupuesto  en el PresupuestoContext, tienes que rodearlo sobre App")
    }

    return context
  
}