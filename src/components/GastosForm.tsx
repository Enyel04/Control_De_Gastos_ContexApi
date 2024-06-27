import { categories } from "../data/categories";

import type { DraftCantidad, Value } from "../types";
import { ChangeEvent } from "react";

import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

import MensajeError from "./MensajeError";



export default function GastosForm() {
    //Estoy trayendo los datos de Types del index
    const [gastos,setGastos]=useState<DraftCantidad>({
      cantidad:0,
      nombreGasto:'',
      categoria:'',
      date:new Date()
    })

    const [error,setError]=useState('')
    
    const handleChange= (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      const {name, value} = e.target
      const isAmmountField= ['cantidad'].includes(name)

      setGastos({
        ...gastos,
          [name]: isAmmountField ? Number(value) :value
      })
      
    }

    

    const handleChangeDate= (value: Value) => {
      setGastos({
        ...gastos,
        date:value
      })
   
     
      
      
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   

      // Validación
      if (Object.values(gastos).includes('')) {
       
        setTimeout(() => {
          setError('Todos los Campos son obligatorios');
        }, 1500); // El mensaje desaparecerá después de 3 segundos
        return;
    }

      console.log('Todo fino');
      
  };
  

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend 
      className="uppercase text-center text-2xl font-black border-b-4 border-sky-500 py-2">Nuevo Gasto</legend>
       

      {error && <MensajeError> {error} </MensajeError>}
    
      <div className=" flex flex-col gap-2">
        <label htmlFor="nombreGasto" className=" text-xl"> Nombre Gasto:</label>

        <input type="text" id="nombreGasto" placeholder="Nombre de Gastos" className=" bg-slate-100 p-2" name="nombreGasto"onChange={handleChange}/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="cantidad" className=" text-xl"> Cantidad:</label>
        <input type="number" id="cantidad" placeholder="Añade la Cantidad del Gasto" className=" bg-slate-100 p-2" name="cantidad" onChange={handleChange}/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="categoria" className=" text-xl"> categoria:</label>

        <select className="bg-slate-100 p-2" id="categoria" name="categoria" onChange={handleChange}>

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
          onChange={handleChangeDate}
        />

      </div>

        

        <input type="submit" className=" bg-sky-600 cursor-pointer w-full text-white uppercase font-bold rounded-lg p-2" value={'Registrar Gasto'} />


      

        </div>
     
    </form>
  )
}
