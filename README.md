# 餐飲訂餐系統 Food Order System

這是一個使用 React、TypeScript 與 Vite 構建的餐飲訂餐系統。該系統允許使用者瀏覽菜單、將食品添加到購物車，並查看訂單歷史記錄。

## 功能特點

- 菜單瀏覽：查看可用的食品和飲料
- 購物車管理：添加、移除和調整訂單項目
- 訂單歷史：查看過去的訂單
- 響應式設計：適應各種設備尺寸

## 技術堆疊

- **前端**:

  - React 19
  - TypeScript
  - Redux Toolkit (狀態管理)
  - TailwindCSS (樣式)
  - Vite (構建工具)

- **測試**:
  - Vitest
  - React Testing Library

## 安裝與運行

### 前提條件

- Node.js (推薦 v18.0.0 或更高版本)
- npm 或 yarn

### 安裝步驟

1. 安裝依賴

   ```
   yarn install
   ```

2. 啟動開發服務器

   ```
   yarn dev
   ```

3. 開啟瀏覽器並訪問 `http://localhost:5173`

## 構建生產版本

```
yarn build
```

生成的檔案將位於 `dist` 資料夾中。

## 運行測試

```
yarn test        # 運行所有測試
yarn test:watch  # 在監視模式下運行測試
```
