import './App.css';
import { useState,useEffect } from 'react'
import Board from './components/Board';
import { pinData } from './data';

const pageNumber = 1
function App() {
  const [state, setState] = useState([])
  const [page, setPage] = useState(pageNumber)

  useEffect(() => {
    fetch(pinData)
    console.log("it works")
    // .then(res=>res.pinData)
    // .then(json =>setState(...state,...json.pinData))
  }, [pageNumber])

  window.onscroll = function () {
    
  }
  
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
