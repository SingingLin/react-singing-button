# React Scaffold for ASUS CMS

> **注意：開發時須全面注意所有 Error 或 Warning 資訊。**

---
## Application structure

```
src/
├── assets/
├── docs/                   [文件、style guides]
├── common/                 [應用級別的通用元件]
├── containers(or pages)/
|   ├── feature1/
|   |   ├── components/     [功能拆分出的專用元件]
|   |   └── feature1.tsx    [容器元件]
├── helpers(or lib)/        [純資料邏輯處理相關、middleware]
│   ├── middleware.ts
│   └── utils.ts
├── Interface/
├── mocks/                  [fake Api 相關]
├── redux(os store)/        [其實還沒仔細研究，之後再規劃]
|   ├── index.ts            [combineReducers]
|   ├── module1.ts          [reducer, action types, actions creators]
|   └── module2.ts          [reducer, action types, actions creators]
├── routes/
│   └── index.ts
└── index.tsx
```

reference：
- [談大型React app檔案架構](https://medium.com/frochu/large-react-app-file-structure-b8be5b1329df)
- [如何組織你的 React Redux 的檔案架構](https://medium.com/@as790726/%E5%A6%82%E4%BD%95%E7%B5%84%E7%B9%94%E4%BD%A0%E7%9A%84-react-redux-%E7%9A%84%E6%AA%94%E6%A1%88%E6%9E%B6%E6%A7%8B-e000a1afdd1)

_皆可再討論_

---

## 開發環境

- node v14.16.1 (lts/fermium)
- React 17
- Webpack 5
- Babel 7
- eslint 7
- husky 4
- editorconfig

---

- 排版工具 Prettier plugin
  - html
  - style
  - ts/tsx/js/jsx
  - json
