
import { formatoDivisa } from '../helpers'

type PresupuestoCantidadProps={
  //Se le agrega el ?, ya que no sera obligatorio de que haya un label, esto es en el caso de que no sea obligatorio
    label?:string
    cantidad:number
}

export default function PresupuestoCantidad({label,cantidad}: PresupuestoCantidadProps) {
  return (
   <p className=' text-2xl text-sky-600 font-bold'>
     {/* Con este codigo, en el caso de que no haya ningun labe, se elimina los ':' */}
      {label && `${label}: ` }

      
    <span className=' font-black text-black'> {formatoDivisa(cantidad)}</span>

   </p>
  )
}
