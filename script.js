// 1st method
function getFormvalue() {
    //Write your code here
    const names = document.querySelectorAll("input");
    alert(names[0].value + " " + names[1].value);

}

// ------------2nd method ---------
// function getFormvalue() {
//     var x=document.getElementById("form1");
//     let name = ""
//     for (var i=0;i<x.length;i++) {
//         if (x.elements[i].value!='Submit')
//             name += x.elements[i].value + " "
//     }
//     alert(name.substring(0,name.length-1));
// }
// console.log(`${document.querySelector("input[0].value")}` )
