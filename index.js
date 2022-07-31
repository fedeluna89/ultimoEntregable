const lista = document.getElementById("lista");

const traerDatos = async () => {
    const respuesta = await fetch("./datos.json");
    const data = await respuesta.json();
    data.forEach(producto => {
        const li = document.createElement(`li`);
        li.innerHTML = `
                        <h2>${producto.mombre}</h2>
                        <p>${producto.precio}</p>
                        <p>${producto.id}</p>
                        <hr/>`

        lista.append(li);
    });
}

traerDatos();
