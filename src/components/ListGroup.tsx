import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "Beijing", "London", "Paris", "San Francisco"];
  const Message = items.length === 0 && <p>No Item found</p>;
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {Message}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
