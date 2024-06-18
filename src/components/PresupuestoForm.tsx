

export default function Form() {
  return (
    
    <form className='space-y-5'>
      <div className='flex flex-col space-y-5'>
          <label htmlFor="presupuesto" className=' text-4xl text-sky-600 font-bold  text-center'>
              Definir Presupuesto 
          </label>

          <input
                id='presupuesto' 
                type="number" 
                className=" w-full bg-white border bordger-gray-200 p2"
                placeholder='Definir tu presupuesto '
                name='presupuesto'
          />
      </div>

      <input 
          type="submit" 
          value='Definir Presupuesto'
          className=' bg-sky-600 hover:bg-sky-700 cursor-pointer w-full p-2 text-white font-black uppercase'
      
      />


    </form>
  )
}
