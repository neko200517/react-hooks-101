import React, { useReducer, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event';

import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    );
    if (result) {
      dispatch({
        type: 'DELETE_ALL_EVENTS',
      });
    }
  };

  const unCleatable = title === '' || body === '';
  const unDeletable = state.length <= 0;

  return (
    <>
      <div className='container-fluid'>
        <h4>イベント作成フォーム</h4>
        <form>
          <div className='form-group'>
            <label htmlFor='formEventTitle'>タイトル</label>
            <input
              className='form-control'
              id='formEventTitle'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='formEventBody'>ボディー</label>
            <textarea
              className='form-control'
              id='formEventBody'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button
            className='btn btn-primary'
            onClick={addEvent}
            disabled={unCleatable}
          >
            イベントを作成する
          </button>
          <button
            className='btn btn-danger'
            onClick={deleteAllEvents}
            disabled={unDeletable}
          >
            すべてのイベントを削除する
          </button>

          <div className='form-group'>
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
                {state.map((event, index) => (
                  <Event key={index} event={event} dispatch={dispatch} />
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
