import { formatDate } from "../helpers"
import { Gastos } from "../types"
import PresupuestoCantidad from "./PresupuestoCantidad"

type GastosDetallesProps={
    gastos:Gastos
}
export default function GastosDetalles({gastos} :GastosDetallesProps) {
  return (
    <div className=" bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">

        <div>

        </div>
        <div>
            <p>{gastos.nombreGasto}</p>
            {/* React a veces no mostrara todo asi que hay que convertir las cosas en String */}
            <p className=" text-slate-600 text-sm">
                {formatDate( gastos.date!.toString())}
                </p>
           
        </div>
        <div>
        <PresupuestoCantidad cantidad={gastos.cantidad}/>
        </div>
      
    </div>
  )
}
