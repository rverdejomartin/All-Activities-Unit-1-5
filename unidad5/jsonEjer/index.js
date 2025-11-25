const datosAMaquetar = {
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#f00"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}

window.onload = ()=>{
    let contenedor = document.getElementById("contenedor");

    for(color of datosAMaquetar.colors){
        let miDiv = document.createElement("div");
        let parrafo = document.createElement("p");

        //color div
        miDiv.style.backgroundColor = color.color;
        if(color.color == "black" || color.color == "red" || color.color == "blue"){
            miDiv.style.color = "white";
        } else miDiv.style.color = "black";
        if(color.color == "white"){
            miDiv.style.border = "1px solid black";
        }

        //contenio parrafo
        parrafo.innerHTML = color.color + "<br>" + color.category + "<br>" + (color.type ||'') + "<br>" + color.code.hex;

        contenedor.appendChild(miDiv);
        miDiv.appendChild(parrafo)
    }
}