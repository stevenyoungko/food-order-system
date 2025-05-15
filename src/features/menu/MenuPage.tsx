import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

const MenuPage = () => {
  const categories = useSelector((state: RootState) => state.menu.categories);

  return (
    <div style={{ padding: 12 }}>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>菜單</h1>
      {categories.map(category => (
        <div key={category.id} style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 16, marginBottom: 8 }}>{category.name}</h2>
          <ul style={{ paddingLeft: 16 }}>
            {category.foods.map(food => (
              <li key={food.id} style={{ marginBottom: 6, fontSize: 14 }}>
                <span>{food.name} - ${food.price}</span>
                <button style={{ marginLeft: 10, fontSize: 13, padding: '2px 8px' }}>加入購物車</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuPage; 