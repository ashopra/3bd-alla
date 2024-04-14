import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn");
const b = document.querySelector(".stuts");
function show(d){
  b.textContent = d;
}
a.onclick = show(info[1]);
