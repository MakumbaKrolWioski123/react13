import { useState } from "react";

function CartCounter() {
      const [count, setCount] = useState(0);
  return (
    <div className="cart-counter">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Dodaj</button>
        <button onClick={() => setCount(count + 5)}>Dodaj 5</button>
        <button onClick={() => setCount(count * 2)}>Podwój</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Usun</button>

    </div>
  );
}


export default CartCounter;