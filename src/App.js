import React from "react";
import model from "./store/model";
import { StoreProvider, createStore } from "easy-peasy";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="w-50 mx-auto pt-4 pb-5">
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </StoreProvider>
  );
}

export default App;
