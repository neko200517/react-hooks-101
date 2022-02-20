import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <label htmlFor='formEventBody'>イベント一覧</label>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
