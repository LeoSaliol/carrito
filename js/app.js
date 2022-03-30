let botones = document.querySelectorAll(".btn-primary");
let template = document.querySelector("#template");
let frament = document.createDocumentFragment();
let carrit2 = document.getElementById("carrito");
let botonesResta = document.querySelectorAll(".btn-secondary")



let carritoObjeto = {

};

// 2 - el e.target.dataset.fruta trae la informacion del boton que se preciono 
let carrito = (e) => {
    
    // 3- con la informacion del 2 contruyo un objeto 
    let producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }
   // 12 - Por Ultimo sumamos la cantidad

   if(carritoObjeto.hasOwnProperty(producto.titulo)){
    // con esto capturamos la cantidad que viene de nuestro carritoObjeto  
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    } 
   
   
    // 4- EMpujamos al producto dentro de nueso carritoObjeto... Usamos los corchetes porque colocamos el nombre de la propiedad, en este caso producto

    carritoObjeto[producto.titulo] = producto
   
    // 6- ahora ponemos la funcion para pintar el carrito en el DOM
    pintarCarrito();

}

// 5- ahora que tenemos la info, hacemos una funcion para pintarla

let pintarCarrito = () => {
    // 11- ponemos vacio a nuestro carrito 
    carrit2.textContent = "";

    // 7- Ahora vamos a recorrer el carritoObjeto, para eso lo pasamos a arrray con el object.values y lo recorremos 
    Object.values(carritoObjeto).forEach(i => {
        // 8- y ahora si, aca dentro lo pintamos (ES IMPORTANTE DECLARAR EL CLONE ACA DENTRO)
        let clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = i.titulo;
        clone.querySelector(".rounded-pill").textContent = i.cantidad;

        // 9- ahora que tenemos el titulo y la cantidad, lo pasamos al fragmen para evitar el reflow
        frament.appendChild(clone);
    })

    // 10 - ya con el fragment podemos pintar la informacion
    carrit2.appendChild(frament);
};



botones.forEach((boton) => boton.addEventListener("click", carrito)); 
// 1 - Recorro el Array y lo mando para el carrito



