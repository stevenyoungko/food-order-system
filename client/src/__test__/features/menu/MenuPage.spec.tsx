import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import MenuPage from '../../../features/menu/MenuPage';
import { createTestStore } from '../../../test-utils/testStore';

describe('MenuPage Component', () => {
  it('should render menu categories and food items correctly', () => {
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <MenuPage />
      </Provider>,
    );

    expect(getByText('菜單')).toBeInTheDocument();
    expect(getByText('中式')).toBeInTheDocument();
    expect(getByText('牛肉麵 - $120')).toBeInTheDocument();
    expect(getByText('日式')).toBeInTheDocument();
    expect(getByText('美式')).toBeInTheDocument();
  });

  it('should trigger addToCart action when Add to Cart button is clicked', () => {
    const store = createTestStore();
    const spy = vi.spyOn(store, 'dispatch');

    const { getAllByText } = render(
      <Provider store={store}>
        <MenuPage />
      </Provider>,
    );

    const addToCartButtons = getAllByText('加入購物車');
    fireEvent.click(addToCartButtons[0]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: {
          id: 'f1',
          name: '牛肉麵',
          price: 120,
        },
      }),
    );
  });
});
