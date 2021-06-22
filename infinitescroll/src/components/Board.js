import { pinData } from "../data";

export default function Board() {
  const imgJsx = pinData.map((data, key) => {
    return (
      <div className="pin-card" key={key}>
        <h4 className="username">{data.pinner.username}</h4>
        <img src={data.images["236x"].url} />
        <p>{data.description}</p>
        <p>{data.like_count}</p>
      </div>
    );
  });

  return (
    <div className="board">
      <h1>Pinterest</h1>
      {imgJsx}
    </div>
  );
}
