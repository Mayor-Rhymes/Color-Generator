const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const but = document.getElementsByTagName("button")[0];
const body = document.body;

const dros = document.getElementsByClassName("dros")[0];

const simpleColors = ["blue", "grey", "tomato", "turquoise", "coral"];

console.log(body);

but.addEventListener("click", function(){


    body.style.backgroundColor = simpleColors[getRandomer()];
    dros.textContent = simpleColors[getRandomer()];


    

    
});


function getRandomer(){


    return Math.floor(Math.random()*simpleColors.length);

}

