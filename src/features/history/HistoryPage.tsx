import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import {
  type Order,
  fetchOrderHistory,
  clearOrderHistory,
} from './historySlice';
import type { CartItem } from '../cart/cartSlice';

const HistoryPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, status, error } = useSelector(
    (state: RootState) => state.history,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrderHistory());
    }
  }, [status, dispatch]);

  const handleClearHistory = () => {
    dispatch(clearOrderHistory());
  };

  if (status === 'loading') {
    return <div className="p-4 text-center">載入中...</div>;
  }

  if (status === 'failed') {
    return (
      <div className="p-4 text-center text-red-500">載入失敗: {error}</div>
    );
  }

  if (orders.length === 0) {
    return <div className="p-4 text-center text-gray-500">尚無訂單紀錄</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-lg mb-4">訂單紀錄</h1>
      <button
        className="mb-4 px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
        onClick={handleClearHistory}
      >
        清除所有紀錄
      </button>
      <div className="space-y-6">
        {orders.map((order: Order) => (
          <div key={order.id} className="border rounded p-4">
            <div className="mb-2 text-gray-500 text-xs">
              {new Date(order.timestamp).toLocaleString()}
            </div>
            <table className="w-full text-sm mb-2">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-1">品項</th>
                  <th className="w-24 text-center">單價</th>
                  <th className="w-20 text-center">數量</th>
                  <th className="w-20 text-center">小計</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item: CartItem) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-b-0 h-[40px]"
                  >
                    <td>{item.name}</td>
                    <td className="w-24 text-center">${item.price}</td>
                    <td className="w-20 text-center">{item.quantity}</td>
                    <td className="w-20 text-center">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center">
              <span className="font-bold">總金額：</span>
              <span className="text-lg">${order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
