let rootPath = 'https://lebogangsekaleli@gmail.com.itvarsity.org/api/ContacBook/';
let apiKey = checkApiKey();

function checkApiKey() {
  if (!localStorage.getItem('apiKey')) {
    window.open('enter-api-key.html', '_self');
  }
  return localStorage.getItem('apiKey');
}
