import MenuPage from './features/menu/MenuPage';
import CartPage from './features/cart/cartPage';
import HistoryPage from './features/history/HistoryPage';

function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-1 border-r border-gray-200 overflow-auto">
        <MenuPage />
      </div>
      <div className="flex-1 border-r border-gray-200 overflow-auto bg-gray-50">
        <CartPage />
      </div>
      <div className="flex-1 overflow-auto bg-white">
        <HistoryPage />
      </div>
    </div>
  );
}

export default App;
