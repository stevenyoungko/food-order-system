import { createSlice } from '@reduxjs/toolkit';
import { menuData } from '../../mock/menuData';

const initialState = {
  categories: menuData,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export default menuSlice.reducer; 