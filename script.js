import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn");
a.onclick = function (){
alert(info[1]);
}
