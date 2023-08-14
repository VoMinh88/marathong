const arr = [];
function fun1(){
    var name=''
    name= document.getElementById("name").value;
    arr.push(name)  
    let str = ""
    arr.forEach(el=> {
        str += "<ul>" + el
    })
     console.log(arr)
     console.log(str)
     show.innerHTML = str
}
