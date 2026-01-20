import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "swim" },
    { id: 2, checked: false, item: "playing" },
    { id: 3, checked: true, item: "coding" }
  ]);

  const handleCheck = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  };

   const onremove = (id) => {
    const newItems = items.filter((item) =>
      item.id !== id 
    );
    setItems(newItems);
  };

  return (
    <>

    {items.length? (
    
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
           
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />

          <label
          style={(item.checked)?{textDecoration:'line-through'}:null}>
           
             
              {item.item}
          </label>

          <FaTrash
            role="button"
            tabIndex="0"
            onClick={() => onremove(item.id)}
          />
        </li>
      ))}
    </ul>):(
      <p>list is empty</p>
    )}

    </>
  );
}

export default Content;
