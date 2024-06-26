import { categories } from "../data/categories";

import type { DraftCantidad } from "../types";

import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';



export default function GastosForm() {
    //Estoy trayendo los datos de Types del index
    const [gastos,setGastos]=useState<DraftCantidad>({
      cantidad:0,
      nombreGasto:'',
      categoria:'',
      date:new Date()
    })

  return (
    <form className="space-y-5">
      <legend 
      className="uppercase text-center text-2xl font-black border-b-4 border-sky-500 py-2">Nuevo Gasto</legend>

      <div className=" flex flex-col gap-2">
        <label htmlFor="gastoName" className=" text-xl"> Nombre Gasto:</label>

        <input type="text" id="gastoName" placeholder="Nombre de Gastos" className=" bg-slate-100 p-2" name="gastoName" value={gastos.nombreGasto}/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="cantidad" className=" text-xl"> Cantidad:</label>
        <input type="number" id="cantidad" placeholder="Añade la Cantidad del Gasto" className=" bg-slate-100 p-2" name="cantidad" value={gastos.cantidad}/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="categoria" className=" text-xl"> categoria:</label>

        <select className="bg-slate-100 p-2" id="categoria" name="categoria" value={gastos.categoria}>

          {/* Sintaxis para realizar consultas para almacenar en un select */}
              <option value="">--Seleccione--</option>
                {categories.map((categoria) => (
                  <option value={categoria.id} key={categoria.id}>
                    {categoria.name}
                  </option>
                ))}
        </select>

        <div className=" flex flex-col gap-2">
        <label htmlFor="fechaGasto" className=" text-xl">Fecha Gasto:</label>

        <DatePicker  
          className=" bg-slate-100 p-2 border-0" 
          value={gastos.date}
        />

      </div>

        

        <input type="submit" className=" bg-sky-600 cursor-pointer w-full text-white uppercase font-bold rounded-lg p-2" value={'Registrar Gasto'} />


      

        </div>
     
    </form>
  )
}
