import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = [
    "India",
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  //const selectedIndex = 0; //instead of this dynamically we can assign the value when the value changes
  //using Hooks(useState)
  const [selectedIndex, setSlectedIndex] = useState(-1);
  //items = [];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li> */}
        {items.map((items, index) => (
          <li
            // className="list-group-item"/
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            //onClick={() => console.log(items, index)}
            //onClick={handleClick}
            onClick={() => {
              setSlectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
