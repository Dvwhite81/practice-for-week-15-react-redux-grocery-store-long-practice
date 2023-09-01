import { useDispatch } from "react-redux";
import { addCart } from "../../store/cart";

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();
  console.log(produce)

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addCart(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
