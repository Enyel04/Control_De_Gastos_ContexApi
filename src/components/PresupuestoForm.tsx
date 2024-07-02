
import { useMemo, useState } from "react"
import { ChangeEvent } from "react"
import { usePresupuesto } from "../hooks/usePresupuesto"


export default function Form() {
    const [presupuesto,setPresupuesto]= useState(0)

    const {dispatch}= usePresupuesto()

    const handleChange=(e : ChangeEvent<HTMLInputElement>) => {

      setPresupuesto(e.target.valueAsNumber)
      
      
    }

    const isValid= useMemo (() => {
      return isNaN(presupuesto) || presupuesto <=0
      
    }, [presupuesto])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      dispatch ({type:'add-presupuesto',payload:{presupuesto}})
      
    }

  return (
    
    <form className='space-y-5' onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-5'>
          <label htmlFor="presupuesto" className=' text-4xl text-sky-600 font-bold  text-center'>
              Definir Presupuesto 
          </label>

          <input
                id='presupuestoID' 
                type="number" 
                className=" w-full bg-white border bordger-gray-200 p2"
                placeholder='Definir tu presupuesto '
                name='Añade Tu Presupuesto Ejem:500'
                
                onChange={ handleChange}
          />
      </div>

      <input 
          type="submit" 
          value='Definir Presupuesto'
          className=' bg-sky-600 hover:bg-sky-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40 disabled:cursor-auto disabled:hover:bg-sky-600'
        disabled={isValid}
      />


    </form>
  )
}
