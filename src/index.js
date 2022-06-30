import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/user"
import listsReducer from "./features/studentLists"
import studentMergedListReducer from "./features/studentMergedList"
import currentStudentReducer from './features/currentStudent';
import checkboxNameListReducer from './features/checkboxNameList';


const store = configureStore({
  reducer: {
    user: userReducer,
    lists: listsReducer,
    currentStudent: currentStudentReducer,
    MergedList: studentMergedListReducer,
    checkboxNameList: checkboxNameListReducer,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
