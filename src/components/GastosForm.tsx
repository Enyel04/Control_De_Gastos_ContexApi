import { categories } from "../data/categories";


export default function GastosForm() {
  return (
    <form className="space-y-5">
      <legend 
      className="uppercase text-center text-2xl font-black border-b-4 border-sky-500 py-2">Nuevo Gasto</legend>

      <div className=" flex flex-col gap-2">
        <label htmlFor="gastoName" className=" text-xl"> Nombre Gasto:</label>

        <input type="text" id="gastoName" placeholder="Nombre de Gastos" className=" bg-slate-100 p-2" name="gastoName"/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="cantidad" className=" text-xl"> Cantidad:</label>
        <input type="number" id="cantidad" placeholder="Añade la Cantidad del Gasto" className=" bg-slate-100 p-2" name="cantidad"/>

      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="categoria" className=" text-xl"> categoria:</label>

        <select className="bg-slate-100 p-2" id="categoria" name="categoria">

          {/* Sintaxis para realizar consultas para almacenar en un select */}
              <option value="">--Seleccione--</option>
                {categories.map((categoria) => (
                  <option value={categoria.id} key={categoria.id}>
                    {categoria.name}
                  </option>
                ))}
        </select>

        <input type="submit" className=" bg-sky-600 cursor-pointer w-full text-white uppercase font-bold rounded-lg p-2" value={'Registrar Gasto'} />


      

        </div>
     
    </form>
  )
}
