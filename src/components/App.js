import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <div className='container-fluid'>
        <h4>イベント作成フォーム</h4>
        <form>
          <div className='form-group'>
            <label htmlFor='formEventTitle'>タイトル</label>
            <input className='form-control' id='formEventTitle' />
          </div>

          <div className='form-group'>
            <label htmlFor='formEventBody'>ボディー</label>
            <textarea className='form-control' id='formEventBody' />
          </div>

          <button className='btn btn-primary'>イベントを作成する</button>
          <button className='btn btn-danger'>すべてのイベントを削除する</button>

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
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
