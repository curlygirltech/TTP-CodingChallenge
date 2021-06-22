import "./App.css";
import { useState,useEffect } from "react";
import Board from "./components/Board";
import { pinData } from "./data";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component'

const pageNumber = 1;
function App() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(pageNumber);


  useEffect(() => {
    axios(pinData)
    .then(res=>res.data)
    .then(json =>setState([...state,...json.data]))
    console.log("it works")
  }, [page])

  // const onScrollToEnd = () => {
  //   setPage(page + 1)
  // }
  // window.onscroll = function () {
  //   if (
  //     window.innerheight + document.documentElement.scrollTop
  //     >= document.documentElement.offsetHeight
  //   ) {
  //     onScrollToEnd();
  //   }
  // }

  return (
    <div className="App">
      <InfiniteScroll>
      dataLength={state.length} 
      next={()=>setPage(page+1)}
      hasMore={true}
      <Board Board={Board} />
  
    </InfiniteScroll>
    </div>
  );
}

export default App;
