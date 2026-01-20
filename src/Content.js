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

  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />

          <label>{item.item}</label>

          <FaTrash
            role="button"
            tabIndex="0"
            onClick={() => handleCheck(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default Content;
