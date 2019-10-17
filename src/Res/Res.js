import React from 'react';
import './Res.css';

const Res = ({ id, name, date, time, number }) => {
  return (
    <section>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button>Cancel</button>
    </section>
  )
}

export default Res;
