import { createSlice } from '@reduxjs/toolkit';
import { menuData } from '../../mock/menuData';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  foods: MenuItem[];
}

const initialState = {
  categories: menuData,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
