import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCount, minusOne, plusOne, removeCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => dispatch(changeCount(item.id, parseInt(e.target.value)))}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(plusOne(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch((item.count < 2) ? removeCart(item.id) : minusOne(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
