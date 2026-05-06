const cargarCategorias = () => {
    const lista = document.getElementById("lista_categorias");
    lista.innerHTML =``;

    categorias.forEach(cate =>{

        const li = document.createElement("li");

        const a = document.createElement("a");
        a.textContent = cate;
        a.href = "#";

        li.appendChild(a);
        lista.appendChild(li);
    });
};
cargarCategorias();



const cargarProductos = () => {
    const contenedor = document.getElementById("products");
    contenedor.innerHTML =``;
    productos.forEach(prod =>{

        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = prod.nombre;
        const img = document.createElement("img");
        img.src = prod.imagen;
        const p = document.createElement("p");
        p.textContent = prod.descripcion;
        const precio = document.createElement("p");
        precio.innerHTML = `<strong>$${prod.precio}</strong>`;
        const button = document.createElement("button");
        button.textContent = "Agregar al Carrito";

        button.addEventListener("click", () => {
            alert(`Agregaste ${prod.nombre} al carrito!`);
        });

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p);
        article.appendChild(precio);
        article.appendChild(button);
        contenedor.appendChild(article);
    });
};

cargarProductos();