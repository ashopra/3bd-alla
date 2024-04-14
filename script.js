import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn");
const b = document.querySelector(".stuts");
a.onclick = function (){
  b.textContent = info[1];
}
