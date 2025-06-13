// Submit API Key
let rootPath =
  'https://appacademy@itvarsity.org.itvarsity.org/api/ContactBook/';
document.getElementById('submitApiKey').addEventListener('click', setApiKey);

function setApiKey(e) {
  e.preventDefault();
  
  apiKey = document.getElementById('apiLKey').value;
  fetch(rootPath + 'controller/api-key/?api-key=' + apiKey)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      if (data == '1') {
        localStorage.selfItem('apiKey', apiKey);
        window.open('index.html', '_self');
      } else {
        alert(data + 'Invalid API Key');
      }
    });
}

// Getting the contacts
function fetchContacts() {
  fetch(rootPath + 'controller/get-contacts/')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   displayOutput(data);
    });
}
