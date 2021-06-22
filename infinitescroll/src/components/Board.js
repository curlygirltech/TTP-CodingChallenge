import { pinData } from "../data"

export default function Board() {
  // const{data} =props
  const pinDataArray =[pinData]
    // Object.entries(pinData)
  // console.log(pinDataArray)
  const imgJsx = pinData.map((data, key) => {
    return(
      <div className="pin-card" key={key}>
        <h4 className="username">{data.pinner.username}</h4>
        <img src={data.images["136x136"].url} />
        <p>{ data.description}</p>
        <p>{data.like_count}</p>
      </div>
  )})
  
  return (
    <div className="board">
      <h1>Pinterest</h1>
      {imgJsx}
            


      {/* {pinData.map((data, key) => {
        return (
          <div key={key}>
            <div>{data.images}</div>
          </div>
        )
      })} */}
      
    </div>
  )
}




