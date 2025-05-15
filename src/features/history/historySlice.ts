import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../cart/cartSlice';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  timestamp: number;
}

interface HistoryState {
  orders: Order[];
}

const initialState: HistoryState = {
  orders: [],
};

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
});

export const { addOrder, clearHistory } = historySlice.actions;
export default historySlice.reducer;
