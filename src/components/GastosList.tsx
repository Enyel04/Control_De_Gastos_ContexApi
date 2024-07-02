import { useMemo } from "react"
import { usePresupuesto } from "../hooks/usePresupuesto"
import GastosDetalles from "./GastosDetalles"



export default function GastosList() {

    const {state}=usePresupuesto()

  
    //Filtra los gastos
    const FiltradoCategoria= state.currentCategory ? state.gastos.filter(gastos=> gastos.categoria ===state.currentCategory):state.gastos
    //Se comprueba si hay gastos
    const isEmpty=useMemo( () =>FiltradoCategoria.length===0,[state.gastos] )
  return (
    <div className="mt-10 white shadow-lg p-10 rounded-lg">

      
      {isEmpty ? <p className=" text-gray-600 text-2xl font-bold">No hay Gastos</p> : (
        <>
        <p className=" text-gray-600 text-2xl font-bold my-5 text-center">Gastos </p>
        {FiltradoCategoria.map(gastos=>(
            <GastosDetalles key={gastos.id} gastos={gastos}
            />
            ))}
        </>
      )}
    </div>
  )
}
