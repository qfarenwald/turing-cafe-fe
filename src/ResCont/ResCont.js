import React from 'react';
import Res from '../Res/Res'
import './ResCont.css';

const ResCont = ({ reservations }) => {
  const allRes = reservations.map((res) => {
    return <Res
      key={res.id}
      id={res.id}
      name={res.name}
      date={res.date}
      time={res.time}
      number={res.number}
    />
  })

  return (
    <section>
      {allRes}
    </section>
  )
}

export default ResCont;
