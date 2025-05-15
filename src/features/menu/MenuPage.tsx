import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { addToCart } from '../cart/cartSlice';
import type { MenuItem } from './menuSlice';

const MenuPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.menu.categories);

  const handleAddToCart = (food: MenuItem) => {
    dispatch(
      addToCart({
        id: food.id,
        name: food.name,
        price: food.price,
      }),
    );
  };

  return (
    <div className="p-3">
      <h1 className="text-lg mb-3">菜單</h1>
      {categories.map((category) => (
        <div key={category.id} className="mb-5">
          <h2 className="text-base mb-2">{category.name}</h2>
          <ul className="pl-4">
            {category.foods.map((food) => (
              <li key={food.id} className="mb-1 text-sm flex items-center">
                <span>
                  {food.name} - ${food.price}
                </span>
                <button
                  className="ml-2 text-xs px-2 py-0.5 border rounded hover:bg-gray-100"
                  onClick={() => handleAddToCart(food)}
                >
                  加入購物車
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
