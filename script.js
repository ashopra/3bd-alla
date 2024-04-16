import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn-t");
const b = document.querySelector(".btn-g");
const c = document.querySelector(".btn-p");
const d = document.querySelector(".stuts");
//d.textContent = JSON.stringify(info) ;
function uniqid(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

a.onclick = function (){
  const url = 'https://twitter.com/i/oauth2/authorize';
  const param = new URLSearchParams({
  'response_type': 'code',
  'client_id': 'client_id',
  'redirect_uri': 'https://ashopra.github.io/3bd-alla/',
  'scope': 'tweet.read users.read offline.access',
  'state': uniqid(16),
  'code_challenge': uniqid(64),
  'code_challenge_method': 'plain'
    });
  location.href = url + '?' + param;
};
//https://3bda11a.000webhostapp.com/api/
b.onclick = function (){
        var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://3bda11a.000webhostapp.com/api/?action=get', true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          d.textContent = xhr.responseText;
          // Do something with the data
        }
      };
      xhr.send();
  //d.textContent = 'GET';
};
c.onclick = function (){d.textContent = 'POST';};
