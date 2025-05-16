import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import cartReducer from '../features/cart/cartSlice';
import historyReducer from '../features/history/historySlice';
import { menuData } from '../mock/menuData';

export const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      cart: cartReducer,
      history: historyReducer,
    },
    preloadedState: {
      menu: {
        categories: menuData,
      },
      cart: {
        items: [],
        total: 0,
      },
      history: {
        orders: [],
      },
      ...preloadedState,
    },
  });
};
