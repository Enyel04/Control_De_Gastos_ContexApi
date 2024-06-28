import { useMemo } from "react"
import { usePresupuesto } from "../hooks/usePresupuesto"
import GastosDetalles from "./GastosDetalles"



export default function GastosList() {

    const {state}=usePresupuesto()

    const isEmpty=useMemo( () =>state.gastos.length===0,[state.gastos] )
  return (
    <div className="mt-10">

      
      {isEmpty ? <p className=" text-gray-600 text-2xl font-bold">No hay Gastos</p> : (
        <>
        <p className=" text-gray-600 text-2xl font-bold my-5 text-center">Gastos </p>
        {state.gastos.map(gastos=>(
            <GastosDetalles key={gastos.id} gastos={gastos}
            />
            ))}
        </>
      )}
    </div>
  )
}
