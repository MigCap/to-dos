import React, { Fragment, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useStoreState(state => state.todos);

  let completedTodos = todos.filter(todo => todo.completed);
  let uncompletedTodos = todos.filter(todo => !todo.completed);

  const fetchLocalStorage = useStoreActions(
    actions => actions.fetchLocalStorage
  );

  useEffect(() => {
    fetchLocalStorage();
    // eslint-disable-next-line
  }, []);

  // const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  /* useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []); */

  return (
    <div className='container todos mt-2 mt-md-5'>
      <h5 className='text-center text-md-left text-bold text-warning font-weight-bold'>
        Uncompleted
      </h5>
      {!uncompletedTodos || uncompletedTodos.length <= 0 ? (
        <p className='text-center text-white m-0 py-2'>No tasks added</p>
      ) : (
        <div>
          {uncompletedTodos.map(todo =>
            !todo.completed ? (
              <TodoItem todo={todo} key={todo.id} />
            ) : (
              <Fragment />
            )
          )}
        </div>
      )}

      <h5 className='text-center text-md-left text-bold text-warning font-weight-bold mt-4'>
        Completed
      </h5>
      {!completedTodos || completedTodos.length <= 0 ? (
        <p className='text-center text-white m-0 py-2'>No tasks completed</p>
      ) : (
        <div>
          {completedTodos.map(todo =>
            todo.completed ? (
              <TodoItem todo={todo} key={todo.id} />
            ) : (
              <Fragment />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Todos;
