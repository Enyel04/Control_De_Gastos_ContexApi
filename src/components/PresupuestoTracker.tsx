
import PresupuestoCantidad from './PresupuestoCantidad'

export default function PresupuestoTracker() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>

        <div className='flex justify-center'>
            <img src="/grafico.jpg" alt="Grafica de Gastos" />
        </div>

        <div className='flex flex-col  justify-center items-center  gap-8'>
            <button type='button' className='  bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg hover:bg-pink-700'>

            Restetear APP
            </button>

            <PresupuestoCantidad
                label="Presupuesto"
                cantidad={300}
            />
            <PresupuestoCantidad
                label="Disponible"
                cantidad={200}
            />
            <PresupuestoCantidad
                label="Gastado"
                cantidad={100}
            />
        </div>
     
    </div>
  )
}
