let mas=[];
let currentVerse ="";



function getMas(){
 
    currentVerse = document.querySelector("#innerVerse").value;
    currentVerse = currentVerse.split("/");
    document.querySelector("#innerVerse").value = "";
    mas.push({src:currentVerse[0],txt:currentVerse[1]});
    console.log(mas);
  
}


function Output(){
    output.innerHTML="";

    for(let i=0;i<mas.length;i++){
        output.innerHTML+='{src: "'+mas[i].src+'", txt:"'+mas[i].txt+'"}'
    }
}
