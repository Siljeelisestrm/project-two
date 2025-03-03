/* import { FaTrashAlt } from "react-icons/fa";
 */
const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      {/*  <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          aria-label={`delete  ${item.item}`}
        /> */}
    </li>
  );
};

export default LineItem;
