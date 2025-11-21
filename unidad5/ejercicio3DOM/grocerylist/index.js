let btnSubmit;
let input;
let container;
let items;
let groceryList = null;
let listOk = false;

window.onload = ()=>{
    container = document.getElementById("border");
    items = document.getElementById("items");
    addWithSubmit();
}

//functions to play with the grocery list
function addWithSubmit(){
    input = document.getElementById("addFather");
    btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", (e)=>{
        if(e.target){
            let inputValue = input.value;
            
            if(inputValue !== ""){
                if(groceryList == null){
                    //we add the ul for the list items 
                    groceryList = document.createElement("ul");
                    items.appendChild(groceryList);
                }

                let newLi = document.createElement("li");
                newLi.innerHTML = inputValue;

                let editBtn = document.createElement("button");
                editBtn.innerHTML = "Edit";
                editBtn.className = "edit";

                let deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "Delete";
                deleteBtn.className = "delete";

                newLi.appendChild(editBtn);
                newLi.appendChild(deleteBtn);
                groceryList.appendChild(newLi);

                //events for the new buttons
                editBtn.addEventListener("click", ()=>{
                    edit(newLi, editBtn);
                })

                deleteBtn.addEventListener("click", ()=>{
                    if(e.target){
                        newLi.remove();
                    } 
                })

                //reset value
                input.value = "";
            }
        }
    });
}

// La función ahora gestiona dos estados: "Edit" y "Save"
function edit(li, btn){
    
    // 1. ESTADO "EDIT" (Acción: Reemplazar el texto por un campo input)
    if(btn.innerHTML === "Edit"){
        
        // A. Identificar el Text Node. Este es el nodo que contiene el texto del ítem.
        let textNode = li.firstChild;
        let currentValue = textNode.nodeValue.trim(); // Obtenemos el valor de texto
        
        // B. Crear el nuevo input.
        let newInputEmergent = document.createElement("input");
        newInputEmergent.type = "text";
        newInputEmergent.value = currentValue;
        
        // C. Reemplazar el nodo de texto (textNode) por el campo input (newInputEmergent).
        li.replaceChild(newInputEmergent, textNode);
        
        // D. Cambiar el botón para indicar la siguiente acción.
        btn.innerHTML = "Save";
        
    } 
    
    // 2. ESTADO "SAVE" (Acción: Reemplazar el campo input por el nuevo texto)
    else if (btn.innerHTML === "Save"){
        
        // A. Identificar el Input Element. Ahora es el primer hijo del <li>.
        let inputField = li.firstChild;
        let newTextValue = inputField.value;
        
        // B. Crear un nuevo Text Node con el valor actualizado del input.
        let newTextNode = document.createTextNode(newTextValue);
        
        // C. Reemplazar el campo input (inputField) por el nuevo texto (newTextNode).
        li.replaceChild(newTextNode, inputField);
        
        // D. Cambiar el botón de vuelta al estado inicial.
        btn.innerHTML = "Edit";
    }
}