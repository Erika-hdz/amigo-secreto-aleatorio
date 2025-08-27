//array vacio, para agregar datos que el usuario agregue
let amigos = [];

//capturar el valor del campo de entrada (conectar HTML y JS)
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

//Funcion para recorrer array amigos, y agregar cada nombre como <li> en la lista.
function renderLista() {
    lista.innerHTML = ""; //Esto limpia la lista antes
    for (let i = 0; i <amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i]; //Esto poner el nombre en <li> lista
        lista.appendChild(li); //Inserta el <li> en la lista <ul>
    }
}

//funcion para agregar amigos
function agregarAmigo() {
    const nombre = input.value.trim(); //captura el valor de input
    //validar que no este vacio
    if(nombre === "") {
        alert('Inserte un nombre, por favor');
        input.focus(); 
        return; //para salir de la funcion
    }

    //Y si es valido, agregamos el array...
        amigos.push(nombre);
        //Limpiar input para prepararlo para el siguiente
        input.value = "";
        renderLista();
}
//Se cierra la funcion, pasemos a lo siguiente

//Funcion para sortear amigo
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
//Hacer que se sorteen de manera aleatoria
const indiceAleatorio = Math.floor(Math.random() * amigos.length);

//Nombre del sorteado
const nombreDelSorteado = amigos[indiceAleatorio];

//Mostrar el resultado en el "resultado"
resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${nombreDelSorteado}</strong></li>`;
}
