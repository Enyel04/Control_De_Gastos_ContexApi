import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Gastos } from "../types"
import PresupuestoCantidad from "./PresupuestoCantidad"
import { categories } from "../data/categories"

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
import { usePresupuesto } from "../hooks/usePresupuesto"





type GastosDetallesProps={
    gastos:Gastos
}
export default function GastosDetalles({gastos} :GastosDetallesProps) {

  const {dispatch} =usePresupuesto()

    const categoriaInfo=useMemo(()=> categories.filter(cat=>cat.id===gastos.categoria)[0], 
    [gastos])

    const leadingActions= () => (
      <LeadingActions>
        <SwipeAction 
        //Se necesita un onclick para usar el esto y se agrega para tomar el ID el dispatch
        onClick={ () => dispatch({type:'get-gastos-by-id',payload:{id:gastos.id}}) }
        >
            Actualizar
        </SwipeAction>
      </LeadingActions>
    )
    const trailingActions= () => (
      <TrailingActions>
        <SwipeAction 
        //Se necesita un onclick para usar el esto, se toma el dispatch para eliminarlo
            onClick={ () => dispatch({type:'remove-gasto',payload:{id:gastos.id}}) }
            //Destructive lo elimina visualmente
            destructive={true}
            >
            Eliminar
        </SwipeAction>
      </TrailingActions>
    )
    return (

        <SwipeableList>
            <SwipeableListItem
            //Pixeles que se recorren para est accion
            maxSwipe={1} 
            // Del Lado Izquierdo al lado derecho
            leadingActions={leadingActions()}
              //  Del lado derecho al izquierdo
            trailingActions={trailingActions()}
            >
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
            </SwipeableListItem>
        </SwipeableList>
    )
}
