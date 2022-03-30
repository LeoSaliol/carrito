HTML :
 <main class="container mt-5">
            <div class="row text-center">
                <article class="col-sm-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Frutilla 🍓</h5>
                            <button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
                        </div>
                    </div>
                </article>
                <article class="col-sm-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Banana 🍌</h5>
                            <button class="btn btn-primary" data-fruta="banana">Agregar</button>
                        </div>
                    </div>
                </article>
                <article class="col-sm-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Manzana 🍏</h5>
                            <button class="btn btn-primary" data-fruta="manzana">Agregar</button>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    
        <section class="container mt-3">
            <ul class="list-group" id="carrito">
                <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="lead">A list item</span>
                    <span class="badge bg-primary rounded-pill">14</span>
                </li> -->
            </ul>
        </section>
    
        <template id="template">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="lead">A list item</span>
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
        </template>






JS:

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoObjeto = {};

const agregarCarrito = (e) => {
    
    // haciendo el "*2" es como si hiciero esto :
    // "Manzana":{
    //     titulo: "Manzana",
    //     id: "Manzana",
    //     cantidad :1 
    // }

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        // el target es para seleccionarlo y el dataset-"elemento" para pintarlo 
        // ademas con esa informacion contruyo el objeto producto

    };

    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    }

    carritoObjeto[producto.id] = producto;
    
    //*2  empujo al objeto "producto" con sus elementos al carrito objeto 


    pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));
// dectetamos el botones, al momento de hacerle click lo mandamos al agregarAlCarrito

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};