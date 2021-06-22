import "./App.css";
import { useState, useEffect } from "react";
import Board from "./components/Board";
import { pinData } from "./data";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const pageNumber = 1;
function App(props) {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(pageNumber);
  // const pinData = props
  console.log(pinData)
  useEffect(() => {
    axios(pinData)
      .then((res) => res.data)
      .then((json) => setState([...state, ...json.data]));
  }, [page]);
  return (
    <div className="App">
      <InfiniteScroll>
        dataLength={pinData.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        <Board Board={Board} />
        {pinData}
      </InfiniteScroll>
    </div>
  );
}

export default App;

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
