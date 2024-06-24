
import PresupuestoForm from "./components/PresupuestoForm"
import { useMemo } from "react";

import { usePresupuesto } from "./hooks/usePresupuesto"
import PresupuestoTracker from "./components/PresupuestoTracker";


function App() {

 const {state}= usePresupuesto()
  console.log(state.presupuesto);
  
  const isvalidPresupuesto=useMemo(() =>state.presupuesto>0 , [state.presupuesto])

  return(
    <>
    
    <div className=" bg-sky-600 py-6 max-h-72">
      <h1 className=" uppercase text-center font-black text-4xl text-white">
        Control de Gastos
      </h1>

      <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
         {isvalidPresupuesto ? <PresupuestoTracker/> : <PresupuestoForm/>}

      </div>


    </div>
      
      </>
  )
}

export default App
