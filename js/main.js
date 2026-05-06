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