import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const add = useStoreActions(actions => actions.add);

  return (
    <div className='mt-3 mt-md-5'>
      <form
        onSubmit={e => {
          e.preventDefault();
          add({
            title,
            completed: false
          });
          setTitle("");
        }}>
        <div className='row'>
          <div className='col-9 col-md-10'>
            <input
              className='form-control form-control-light text-center'
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Add todo title...'
            />
          </div>
          <div className='col-3 col-md-2'>
            <button
              className='btn btn-warning btn-block text-teal font-weight-bold'
              type='submit'>
              <i className='fas fa-plus' />
            </button>
          </div>
        </div>
      </form>
      <p className='text-center text-md-right text-bold text-warning mt-3'>
        * Click todo item to toggle completed
      </p>
    </div>
  );
};

export default AddTodo;
