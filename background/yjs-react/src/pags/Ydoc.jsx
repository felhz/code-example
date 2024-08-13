import { useEffect } from 'react';
import { io } from 'socket.io-client';
import * as Y from 'yjs';

const socket = io('10.254.33.125:4000/yjs', {
  transports: ['websocket'],
});
const ydoc = new Y.Doc();
const yText = ydoc.getText('content');
// 服务端返回的数据
socket.on('update', (arg) => {
  console.log('推送更新数据', arg);
  // Y.applyUpdate(ydoc, new Uint8Array(arg.update));
  // document.querySelector('#desc').innerHTML = yText.toString();
});
socket.on('updateuser', (data) => {
  const users = document.getElementById('users');
  console.log('updateuser', data);
  users.innerHTML = '';
  data.clients.forEach((c) => {
    users.innerHTML += `<div>${c.avatar} ${c.name}</div>`;
  });
});

function Ydoc() {
  useEffect(() => {
    const name =
      new URLSearchParams(window.location.search).get('name') ||
      `匿名${Math.random().toString(36).substr(2)}`;
    const users = document.getElementById('users');

    // 回调是返回的数据
    socket.emit(
      'init',
      {
        room: 'room1',
        avatar: '&#x1F600;',
        name,
      },
      (data) => {
        users.innerHTML = '';
        console.log(data, 'data');
        Y.applyUpdate(ydoc, new Uint8Array(data.doc));
        document.querySelector('#desc').innerHTML = yText.toString();
        data.clients.forEach((c) => {
          users.innerHTML += `<div>${c.avatar} ${c.name}</div>`;
        });
      }
    );

    ydoc.on('update', (update) => {
      console.log('ydoc update', update);
      socket.emit('update', {
        room: 'room1',
        update,
      });
    });
  }, []);

  return (
    <>
      <div id="users"></div>
      <textarea name="" id="textarea"></textarea>
      <div
        onClick={() => {
          const text = document.getElementById('textarea').value;
          yText.insert(text.legnth, text);
        }}
      >
        send
      </div>
      <div id="desc"> </div>
    </>
  );
}

export default Ydoc;
