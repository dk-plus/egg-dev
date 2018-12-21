'use strict';

const f = document.querySelector('form');

if (f) {
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let fd = new FormData(f);
  
    const user = {
      username: fd.get('username'),
      password: fd.get('password'),
    }
  
    post('/login', user, true).then((result) => {
      if (result.code === '0') {
        location.href = 'http://localhost:7001';
      } else {
        console.log(result);
      }
    });
  })
}

function post(url,data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => {
      resolve(JSON.parse(xhr.response))
    };
    xhr.send(JSON.stringify(data));
  });
}