import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Gastos } from "../types"
import PresupuestoCantidad from "./PresupuestoCantidad"
import { categories } from "../data/categories"


type GastosDetallesProps={
    gastos:Gastos
}
export default function GastosDetalles({gastos} :GastosDetallesProps) {

    const categoriaInfo=useMemo(()=> categories.filter(cat=>cat.id===gastos.categoria)[0], [gastos])
    return (
        <div className=" bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">

            <div>
                <img src={`/icono_${categoriaInfo.icon}.svg`} alt="Icono Gasto" className=" w-20" />
            </div>

            <div className="flex-1 space-y-3">
                <p className=" text-sm font-bold uppercase text-slate-500">{categoriaInfo.name}</p>
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
