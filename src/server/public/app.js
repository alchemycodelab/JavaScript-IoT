const ul = document.getElementById('container');
const output = document.getElementById('output');

function sendData (color) {
  const payload = { color: color};
  const options = {
    body: JSON.stringify(payload),
    headers: {
      'content-type':'application/json'
    },
    method: 'POST'
  }
  return fetch('/color', options).then(res => res.json());
}

function updateResults(data) {
  output.value=data;
}


ul.addEventListener('click', (e) => {
  e.preventDefault();
  const color = e.srcElement.innerText.toLowerCase();
  if (['red','blue','green'].indexOf(color) === -1) return;
  sendData(color)
    .then(({ message }) => {
      updateResults(message);
    });
});