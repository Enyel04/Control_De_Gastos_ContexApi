import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { usePresupuesto } from "../hooks/usePresupuesto";


export default function FiltradoCategoria() {

    const {dispatch}= usePresupuesto()

    const handleChange= (e: ChangeEvent<HTMLSelectElement>) =>{
        dispatch({type:'add-filtrado-categoria',payload:{id:e.target.value}})
    }

   

  return (
    <div className="bg white shadow-lg p-10 rounded-lg ">

        <form className=" flex flex-col md:flex-row md:items-center gap-5">
            <label htmlFor="categoria">Filtrar Gastos</label>
            <select id="categoria"
                    className=" bg-slate-100 p-3 flex-1 rounded"
                    onChange={handleChange}
            >
                <option value="">Todas las categorias</option>
                {/* Sin llave,solo parentesis */}
                {categories.map(categoria => (
                  <option 
                  value={categoria.id}
                  key={categoria.id}
                  >
                    {categoria.name}
                  </option>
                ))}
            </select>
        </form>
      
    </div>
  )
}
