
import { useMemo, useState } from "react"
import { ChangeEvent } from "react"


export default function Form() {
    const [presupuesto,setPresupuesto]= useState(0)

    const handleChange=(e : ChangeEvent<HTMLInputElement>) => {

      setPresupuesto(e.target.valueAsNumber)
      
      
    }

    const isValid= useMemo (() => {
      return isNaN(presupuesto) || presupuesto <=0
      
    }, [presupuesto])

    

  return (
    
    <form className='space-y-5'>
      <div className='flex flex-col space-y-5'>
          <label htmlFor="presupuesto" className=' text-4xl text-sky-600 font-bold  text-center'>
              Definir Presupuesto 
          </label>

          <input
                id='presupuestoID' 
                type="number" 
                className=" w-full bg-white border bordger-gray-200 p2"
                placeholder='Definir tu presupuesto '
                name='presupuesto'
                value={presupuesto}
                onChange={ handleChange}
          />
      </div>

      <input 
          type="submit" 
          value='Definir Presupuesto'
          className=' bg-sky-600 hover:bg-sky-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40'
        disabled={isValid}
      />


    </form>
  )
}
