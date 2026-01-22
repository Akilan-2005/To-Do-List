
import { FaTrash } from "react-icons/fa";

function Content({ items, handleCheck, onremove }) {


  return (
    <>

      {items.length ? (

        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input

                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />

              <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}>


                {item.item}
              </label>

              <FaTrash
                role="button"
                tabIndex="0"
                onClick={() => onremove(item.id)}
              />
            </li>
          ))}
        </ul>) : (
        <p>list is empty</p>
      )}

    </>
  );
}

export default Content;
