
import Pagination_Concept from './Components/Pagination_Concept'
import './App.css'

function App() {
  

  const items=[1,2,3,4,5,5,6]

  return (
    <>
     <Pagination_Concept items={items} itemsPerpage={2}/>
    </>
  )
}

export default App
