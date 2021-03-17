
const but = document.getElementsByTagName("button")[0];
const body = document.body;

var para = document.getElementsByClassName("dros")[0];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


console.log(body);

but.onclick = function(){


    body.style.backgroundColor = setHex();
    para.textContent = setHex();


    

    
}

function randomer()
{



    return Math.floor(Math.random()*hex.length);

}

function setHex(){

   
    var nex = "#";


    for(let i = 0; i < 6; i++)
    {


        nex += hex[randomer()];

    }

    return nex;

}
console.log(setHex())
