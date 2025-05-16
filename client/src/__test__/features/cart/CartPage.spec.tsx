import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import CartPage from '../../../features/cart/CartPage';
import { createTestStore } from '../../../test-utils/testStore';

describe('CartPage', () => {
  const alertMock = vi.fn();
  window.alert = alertMock;

  beforeEach(() => {
    alertMock.mockClear();
  });

  it('should show empty cart message when cart is empty', () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>,
    );

    expect(screen.getByText('購物車是空的')).toBeInTheDocument();
  });

  it('should display cart items properly', () => {
    const cartItems = [
      { id: '1', name: '漢堡', price: 50, quantity: 2 },
      { id: '2', name: '薯條', price: 30, quantity: 3 },
    ];

    const store = createTestStore({
      cart: {
        items: cartItems,
      },
    });

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>,
    );

    expect(screen.getByText('漢堡')).toBeInTheDocument();
    expect(screen.getByText('薯條')).toBeInTheDocument();

    const rows = screen.getAllByRole('row').slice(1);

    const burger = rows[0];
    expect(within(burger).getByText('漢堡')).toBeInTheDocument();
    expect(within(burger).getByText('$50')).toBeInTheDocument();
    expect(within(burger).getByDisplayValue('2')).toBeInTheDocument();
    expect(within(burger).getByText('$100')).toBeInTheDocument();

    const fries = rows[1];

    expect(within(fries).getByText('薯條')).toBeInTheDocument();
    expect(within(fries).getByText('$30')).toBeInTheDocument();
    expect(within(fries).getByDisplayValue('3')).toBeInTheDocument();
    expect(within(fries).getByText('$90')).toBeInTheDocument();

    expect(screen.getByText('總金額：').nextSibling).toHaveTextContent('$190');
  });

  it('should update quantity when changed', () => {
    const cartItems = [{ id: '1', name: '漢堡', price: 50, quantity: 2 }];

    const store = createTestStore({
      cart: {
        items: cartItems,
      },
    });

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>,
    );

    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '' } });
    fireEvent.change(quantityInput, { target: { value: '3' } });

    const row = screen.getByRole('row', { name: /漢堡/ });

    const cells = within(row).getAllByRole('cell');
    expect(cells[3]).toHaveTextContent('$150');
    expect(screen.getByText('總金額：').nextSibling).toHaveTextContent('$150');
  });

  it('should remove item from cart', () => {
    const cartItems = [{ id: '1', name: '漢堡', price: 50, quantity: 2 }];

    const store = createTestStore({
      cart: {
        items: cartItems,
      },
    });

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>,
    );

    const removeButton = screen.getByText('移除');
    fireEvent.click(removeButton);

    expect(screen.getByText('購物車是空的')).toBeInTheDocument();
  });

  it('should submit order and clear cart', () => {
    const cartItems = [{ id: '1', name: '漢堡', price: 50, quantity: 2 }];

    const store = createTestStore({
      cart: {
        items: cartItems,
      },
    });

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>,
    );

    const submitButton = screen.getByText('送出訂單');
    fireEvent.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith('訂單已送出！');
    expect(screen.getByText('購物車是空的')).toBeInTheDocument();
  });
});
