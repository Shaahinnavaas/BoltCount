let count= 1
let countel=window.document.getElementById("count-el");
console.log(countel);
let saveEl=window.document.getElementById("save-el");
function increment(){
    count += 1;
    countel.textContent=count;
}
console.log(count)
function save(){
    let prestr= count+" - "
    saveEl.textContent += prestr
    console.log(count);
    countel.textContent=0
    count=0
}
function test(){
    alert("clicked")
}

