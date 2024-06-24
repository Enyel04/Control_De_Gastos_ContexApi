import React from 'react'
import { formatoDivisa } from '../helpers'

type PresupuestoCantidadProps={
    label:string
    cantidad:number
}

export default function PresupuestoCantidad({label,cantidad}: PresupuestoCantidadProps) {
  return (
   <p className=' text-2xl text-sky-600 font-bold'>
{label}
    <span className=' font-black text-black'>: {formatoDivisa(cantidad)}</span>

   </p>
  )
}
