import React from "react";
import { useStoreActions } from "easy-peasy";

const TodoItem = ({ todo }) => {
  const { remove, toggle } = useStoreActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));

  return (
    todo && (
      <div className='row todo my-2'>
        <div
          className='col-10 px-0 todo-title'
          onClick={() => toggle(todo.id)}
          style={{ cursor: "pointer" }}>
          <span
            className='font-weight-bold'
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}>
            {todo.title}
          </span>

          {todo.createdAt && (
            <span className='d-block text-secondary todo-created'>
              {todo.createdAt}
            </span>
          )}
        </div>

        <div className='col-2 my-auto text-right'>
          <button className='' onClick={() => remove(todo.id)}>
            <i className='fas fa-trash-alt' />
          </button>
        </div>
      </div>
    )
  );
};

export default TodoItem;
