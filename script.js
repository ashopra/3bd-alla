import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn");
const b = document.querySelector(".stuts");
b.textContent = info[1];
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
  'client_id': `${{secrets.CLIENT_ID}}`,
  'redirect_uri': 'https://ashopra.github.io/3bd-alla/',
  'scope': 'tweet.read users.read offline.access',
  'state': uniqid(16),
  'code_challenge': uniqid(64),
  'code_challenge_method': 'plain'
    });
  location.href = url + '?' + param;
};
