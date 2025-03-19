import { useState } from 'react'
import Body from './Components/Body/Body'
import Login from './Components/login/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <Body></Body>  
      
       </div>        
    </>
  )
}

export default App
