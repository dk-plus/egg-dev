export function post(url,data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onload = (response) => {
      resolve(response)
    };
    xhr.send(data);
  });
}