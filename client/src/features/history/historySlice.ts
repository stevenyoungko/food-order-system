import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { CartItem } from '../cart/cartSlice';
import { fetchOrders, addNewOrder, clearAllOrders } from '../../api/orderApi';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  timestamp: number;
}

interface HistoryState {
  orders: Order[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: HistoryState = {
  orders: [],
  status: 'idle',
  error: null,
};

// Async thunks
export const fetchOrderHistory = createAsyncThunk(
  'history/fetchOrders',
  async () => {
    return await fetchOrders();
  },
);

export const addOrderToHistory = createAsyncThunk(
  'history/addOrder',
  async (order: Order) => {
    return await addNewOrder(order);
  },
);

export const clearOrderHistory = createAsyncThunk(
  'history/clearOrders',
  async () => {
    await clearAllOrders();
  },
);

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders = [action.payload, ...state.orders];
    },
    clearHistory: (state) => {
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch orders cases
      .addCase(fetchOrderHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch orders';
      })

      // Add order cases
      .addCase(addOrderToHistory.fulfilled, (state, action) => {
        state.orders = [action.payload, ...state.orders];
      })

      // Clear history cases
      .addCase(clearOrderHistory.fulfilled, (state) => {
        state.orders = [];
      });
  },
});

export const { addOrder, clearHistory } = historySlice.actions;
export default historySlice.reducer;
