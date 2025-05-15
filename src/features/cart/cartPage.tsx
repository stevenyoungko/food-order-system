import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { removeFromCart, changeQuantity, clearCart } from './cartSlice';

const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(changeQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleSubmit = () => {
    alert('訂單已送出！');
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return <div className="p-4 text-center text-gray-500">購物車是空的</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-lg mb-4">購物車</h1>
      <table className="w-full text-sm mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left py-1">品項</th>
            <th className="w-24 text-center">單價</th>
            <th className="w-20 text-center">數量</th>
            <th className="w-20 text-center">小計</th>
            <th className="w-20">操作</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b last:border-b-0 h-[60px] ">
              <td>{item.name}</td>
              <td className="w-24 text-center">${item.price}</td>
              <td className="w-20 text-center">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="w-14 border rounded px-1 py-0.5 text-center"
                />
              </td>
              <td className="w-20 text-center">
                ${item.price * item.quantity}
              </td>
              <td className="w-20 text-center py-0">
                <button
                  className="text-red-500"
                  onClick={() => handleRemove(item.id)}
                >
                  移除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">總金額：</span>
        <span className="text-lg">${total}</span>
      </div>
      <button className="w-full" onClick={handleSubmit}>
        送出訂單
      </button>
    </div>
  );
};

export default CartPage;
