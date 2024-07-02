import { categories } from "../data/categories";


import type { DraftCantidad, Value } from "../types";
import { ChangeEvent, useEffect } from "react";

import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

import MensajeError from "./MensajeError";

import { usePresupuesto } from "../hooks/usePresupuesto";



export default function GastosForm() {


    //Estoy trayendo los datos de Types del index
    const [gastos,setGastos]=useState<DraftCantidad>({
      cantidad:0,
      nombreGasto:'',
      categoria:'',
      date:new Date()
    })

    const [error,setError]=useState('')
    const [presupuestoPrevio,setPresupuestoPrevio]=useState(0)
    const { dispatch,state,disponiblePresupuesto} = usePresupuesto()
    //Se agrega todo esto para realizar la actualizacion del Formulario, esto rellena todos los datos del Formulario
    useEffect(() => {
      if (state.editandoID) {
      const editandoGasto=state.gastos.filter(actualGastos => actualGastos.id ===state.editandoID ) [0]
        setGastos(editandoGasto)
        setPresupuestoPrevio(editandoGasto.cantidad)

      }},[state.editandoID])

    
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
   

      // Validación de si estan los datos en el formulario
      if (Object.values(gastos).includes('')) {
        //Se agrega setTimeOut para que aparezca y desaparezca mensaje de error
          setError('Todos los Campos son obligatorios')
        return;
    }

    //Validacion que no pase del limite
      if ((gastos.cantidad-presupuestoPrevio)>disponiblePresupuesto) {
        //Se agrega setTimeOut para que aparezca y desaparezca mensaje de error
          setError('Presupuesto Insuficiente')
        return;
    }

    if (state.editandoID) {
        dispatch({type:'actualizar-gasto',payload:{gastos:{id:state.editandoID, ...gastos}}})

    }else{
    //Agregar un nuevo gasto
    dispatch({type:'add-gastos',payload:{gastos}})
    }

   

      //Reiniciar el state
      setGastos({
        cantidad:0,
        nombreGasto:'',
        categoria:'',
        date:new Date()
      })
      setPresupuestoPrevio(0)
      
  };
  

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend 
      className="uppercase text-center text-2xl font-black border-b-4 border-sky-500 py-2">{state.editandoID ? 'Guardar Cambios' : 'Registar Gasto'}</legend>
       

      {error && <MensajeError> {error} </MensajeError>}
    
      <div className=" flex flex-col gap-2">
        <label htmlFor="nombreGasto" className=" text-xl"> Nombre Gasto:</label>

        <input type="text" id="nombreGasto" placeholder="Nombre de Gastos" className=" bg-slate-100 p-2" name="nombreGasto"onChange={handleChange} value={gastos.nombreGasto}/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="cantidad" className=" text-xl"> Cantidad:</label>
        <input type="number" id="cantidad" placeholder="Añade la Cantidad del Gasto Ejem:200" className=" bg-slate-100 p-2" value={gastos.cantidad === 0 ? '' : gastos.cantidad} name="cantidad" onChange={handleChange} />
        <p className=" p-0  font-bold  text-base"> Disponible: ${disponiblePresupuesto}</p>
      </div>


      <div className=" flex flex-col gap-2">
        <label htmlFor="categoria" className=" text-xl"> categoria:</label>

        <select className="bg-slate-100 p-2" id="categoria" name="categoria" onChange={handleChange} value={gastos.categoria}>

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

        

        <input type="submit" className=" bg-sky-600 cursor-pointer w-full text-white uppercase font-bold rounded-lg p-2" 
        value={state.editandoID? 'Guardar Cambios': 'Registrar Gasto'} />


      

        </div>
     
    </form>
  )
}
