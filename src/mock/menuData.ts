import type { MenuCategory } from '../features/menu/menuSlice';

export const menuData: MenuCategory[] = [
  {
    id: 'c1',
    name: '中式',
    foods: [
      { id: 'f1', name: '牛肉麵', price: 120 },
      { id: 'f2', name: '滷肉飯', price: 60 },
      { id: 'f3', name: '水餃', price: 80 },
    ],
  },
  {
    id: 'c2',
    name: '日式',
    foods: [
      { id: 'f4', name: '壽司', price: 150 },
      { id: 'f5', name: '拉麵', price: 200 },
      { id: 'f6', name: '炸豬排', price: 180 },
    ],
  },
  {
    id: 'c3',
    name: '美式',
    foods: [
      { id: 'f7', name: '漢堡', price: 130 },
      { id: 'f8', name: '薯條', price: 50 },
      { id: 'f9', name: '炸雞', price: 140 },
    ],
  },
];
