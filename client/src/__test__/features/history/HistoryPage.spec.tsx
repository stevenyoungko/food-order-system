import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryPage from '../../../features/history/HistoryPage';
import { createTestStore } from '../../../test-utils/testStore';
import { describe, it, expect } from 'vitest';

describe('HistoryPage', () => {
  it('renders empty state message when no orders exist', () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <HistoryPage />
      </Provider>,
    );

    expect(screen.getByText('尚無訂單紀錄')).toBeInTheDocument();
  });

  it('renders order history when orders exist', () => {
    const mockOrder = {
      id: '123',
      timestamp: new Date('2023-01-01T12:00:00').getTime(),
      items: [
        { id: '1', name: '炒飯', price: 80, quantity: 2 },
        { id: '2', name: '珍珠奶茶', price: 60, quantity: 1 },
      ],
      total: 220,
    };

    const store = createTestStore({
      history: {
        orders: [mockOrder],
      },
    });

    render(
      <Provider store={store}>
        <HistoryPage />
      </Provider>,
    );

    expect(screen.getByText('訂單紀錄')).toBeInTheDocument();
    expect(screen.getByText('炒飯')).toBeInTheDocument();
    expect(screen.getByText('珍珠奶茶')).toBeInTheDocument();
    expect(screen.getByText('總金額：')).toBeInTheDocument();
  });

  it('clears history when clear button is clicked', () => {
    const mockOrder = {
      id: '123',
      timestamp: new Date('2023-01-01T12:00:00').getTime(),
      items: [{ id: '1', name: '炒飯', price: 80, quantity: 2 }],
      total: 160,
    };

    const store = createTestStore({
      history: {
        orders: [mockOrder],
      },
    });

    render(
      <Provider store={store}>
        <HistoryPage />
      </Provider>,
    );

    expect(screen.getByText('炒飯')).toBeInTheDocument();
    fireEvent.click(screen.getByText('清除所有紀錄'));
    expect(screen.getByText('尚無訂單紀錄')).toBeInTheDocument();
  });
});
