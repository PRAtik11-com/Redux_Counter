import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { ADDTO, SUBTO } from './Component/actiontype';
// import { stores } from './Component/store'

function App() {
    
  // const {getState,dispatch} = stores
  // console.log(getState().counter);

  const dispatch = useDispatch()
  console.log(dispatch)

  const counts = useSelector((st) => st.counter)
  console.log(counts);
  
  

  return (
    <>
     <h1>{counts}</h1>
     <button onClick={() => {dispatch(ADDTO())
      // console.log(getState().counter)
      
    }}>ADD</button>
     <button onClick={() => {dispatch(SUBTO())
      // console.log(getState().counter)
    }}>SUB</button>

    </>
  )
}

export default App
