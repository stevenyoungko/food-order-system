import type { Order } from '../features/history/historySlice';

const API_URL = '/api/orders';

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
    });

    if (!response.ok) {
      console.error('Error response:', response.status, response.statusText);
      throw new Error(
        `Failed to fetch orders: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const addNewOrder = async (order: Order): Promise<Order> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      console.error('Error response:', response.status, response.statusText);
      throw new Error(
        `Failed to add order: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding order:', error);
    throw error;
  }
};

export const clearAllOrders = async (): Promise<void> => {
  try {
    const response = await fetch(API_URL, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Error response:', response.status, response.statusText);
      throw new Error(
        `Failed to clear orders: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error('Error clearing orders:', error);
    throw error;
  }
};
