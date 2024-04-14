import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn");
const b = document.querySelector(".stuts");

a.onclick = oauthrize();
function show(d){
  b.textContent = d;
};
function oauthrize(){
  const url = 'https://twitter.com/i/oauth2/authorize';
  const param = new URLSearchParams({
  'response_type': 'code',
  'client_id': 'M1M5R3BMVy13QmpScXkzTUt5OE46MTpjaQ',
  'redirect_uri': 'https://www.example.com',
  'scope': 'tweet.read users.read offline.access',
  'state': 'state',
  'code_challenge': 'challenge',
  'code_challenge_method': 's256'
    });
  location.href = url + '?' + param;
};
