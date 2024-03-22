import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"
import ContextProvider from "./context/Context"
import {styles} from './index.css'
const Gemini = () => {
  return (
    <ContextProvider>
      
<div className=" whole border rounded border-1 ">

<Sidebar/>
    <Main/>
  
</div>

    
    </ContextProvider>
    
  )
}

export default Gemini