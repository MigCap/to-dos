import React from "react";

export default function Header() {
  return (
    <div className='header text-center text-warning font-weight-bold'>
      <h1 className='display-3 text-center text-md-left font-weight-bold'>
        Todo's
      </h1>
      <p className='small font-weight-bold'>- MANAGE YOUR TASKS EASILY -</p>
      <hr className='bg-light' />
    </div>
  );
}
