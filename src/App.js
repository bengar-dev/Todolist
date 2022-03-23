import { useState } from 'react'

import {v4 as uuidv4} from 'uuid'

function App() {

  const [dataArr, setDataArr] = useState([])
  const [inputState, setInputState] = useState('')

  const handleInput = (value) => {
    setInputState(value)
  }

  const handleSubmit = () => {
    if(!inputState) {
      alert(`Vous n'avez rien écrit !`)
      return false
    }
    const newArr = [...dataArr]
    newArr.push({
      txt: inputState,
      id: uuidv4()
    })
    setDataArr(newArr)
    setInputState('')
  }

  const handleDelete = id => {
    let filterArr = dataArr.filter(item => {
      return item.id !== id
    })
    setDataArr(filterArr)
  }

  return (
    <div className='container ml-auto mr-auto mt-4 flex flex-col'>
      <h1 className='font-bold text-2xl text-center'>TodoList</h1>
      <form className='p-1 flex flex-col space-y-2'> 
        <label htmlFor='list' className='p-1 font-bold text-cyan-600'>Chose à faire</label>
        <input value={inputState} onChange={(e) => handleInput(e.target.value)} type='text' id='list' className='bg-gray-100 p-2 outline-none'/>
        <button onClick={(e) => e.preventDefault(handleSubmit())} className='p-2 bg-sky-400 font-medium'>Envoyer</button>
      </form>
      <div className='mt-4 h-px w-9/12 bg-slate-600 ml-auto mr-auto'></div>
      <ul className='mt-4 flex flex-col space-y-2'>
        {dataArr.map((item, index) => 
          <li key={index} className='w-full flex bg-gray-100'>
            <p className='p-4 w-3/4'>{item.txt}</p>
            <button onClick={(e) => e.preventDefault(handleDelete(item.id))} className='w-1/4 bg-red-400 font-medium'>Supprimer</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
