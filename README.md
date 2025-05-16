# 餐飲訂餐系統

一個使用 React 和 Express 構建的現代餐飲訂餐應用，具有實時訂單追蹤功能。

## 概述

該專案是一個全棧餐飲訂餐系統，前端使用 React/TypeScript，後端使用 Express/MongoDB。該應用允許用戶瀏覽餐點、添加到購物車、下單並查看訂單歷史。

## 專案結構

該專案組織為一個 monorepo，包含客戶端和服務器端目錄：

```
food-order-system/
├── client/             # React 前端
│   ├── src/
│   │   ├── app/        # 應用配置
│   │   ├── features/   # 功能模塊（菜單、購物車、歷史）
│   │   ├── api/        # API 集成
│   │   └── ...
├── server/             # Express 後端
│   ├── src/
│   │   ├── controllers/# 請求處理器
│   │   ├── models/     # Mongoose 數據模型
│   │   ├── routes/     # API 路由
│   │   └── index.js    # 服務器入口點
```

## 技術棧

### 前端

- React 19
- TypeScript
- Redux Toolkit（狀態管理）
- TailwindCSS（樣式）
- Vite（構建工具）
- Vitest（測試）

### 後端

- Express
- MongoDB with Mongoose
- Node.js

## 開始使用

### 前提條件

- Node.js（v18 或更高版本）
- Yarn 包管理器
- MongoDB 數據庫

### 安裝

安裝依賴：

```
yarn install:all
```

### 運行應用

同時啟動客戶端和服務器：

```
yarn dev:all
```

分別運行它們：

```
# 僅客戶端
yarn dev:client

# 僅服務器
yarn dev:server
```

### 生產環境構建

```
yarn build:all
```

## 功能

- 瀏覽菜單項目
- 添加項目到購物車
- 下單
- 實時訂單狀態更新
- 查看訂單歷史

## 測試

運行測試：

```
cd client
yarn test
```

## 環境變量

服務器需要以下環境變量：

- `MONGODB_URI`：MongoDB 連接字符串
