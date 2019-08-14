import React from "react";
import model from "./store/model";
import { StoreProvider, createStore } from "easy-peasy";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";
import "./libraries/bootstrap.min.css";
import "./libraries/fontawesome-free-5.9.0-web/css/all.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className='container pt-4 pb-5'>
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </StoreProvider>
  );
}

export default App;
