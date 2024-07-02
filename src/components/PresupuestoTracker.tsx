import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import { usePresupuesto } from '../hooks/usePresupuesto'
import PresupuestoCantidad from './PresupuestoCantidad'
import 'react-circular-progressbar/dist/styles.css'

export default function PresupuestoTracker() {

    const {state,totalGastos,disponiblePresupuesto}= usePresupuesto()
                    //El signo de + lo combierte a numero
    const porcentaje= +((totalGastos/state.presupuesto) * 100).toFixed(2) //Tofixed es para que no muestre mas de 2 decimales

    console.log(porcentaje);
    
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>

        <div className='flex justify-center'>
           <CircularProgressbar
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
            //Asi se hace la graica para que se pueda utilizar, se valida cuando llega al 100% se pinte de tono rojo
            styles={buildStyles({
                pathColor:porcentaje ===100 ? '#DC2626' : '#3b82f6',
                trailColor: '#F5F5F5',
                textSize:8,
                textColor:'#3b82f6'
            })
        }
           ></CircularProgressbar>
        </div>

        <div className='flex flex-col  justify-center items-center  gap-8'>
            <button type='button' className='  bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg hover:bg-pink-700'>

            Restetear APP
            </button>

            <PresupuestoCantidad
                label="Presupuesto"
                cantidad={state.presupuesto}
            />
            <PresupuestoCantidad
                label="Disponible"
                cantidad={disponiblePresupuesto}
            />
            <PresupuestoCantidad
                label="Gastado"
                cantidad={totalGastos}
            />
        </div>
     
    </div>
  )
}
