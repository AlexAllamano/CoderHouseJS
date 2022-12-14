

//inicializo elementos del navbar
const botonQuieroAdoptar = document.getElementById('botonQuieroAdoptar');
const botonQuieroDarEnAdopcion = document.getElementById('botonQuieroDarEnAdopcion');
const header = document.getElementById('header');

//inicializo elemntos dar en Adopción
const seccionDarEnAdopcion = document.getElementById('formularioDarEnAdopcion');
const botonCrearMascota = document.getElementById('botonCrearMascota');
const formAdop = document.getElementById('formularioAdop');

const nombreMascota = document.getElementById('nombreMascota');
const edadMascota = document.getElementById('edadMascota');
const tipoMascotaAlta = document.getElementById('tipoMascotaAlta');
const generoMascotaAlta = document.getElementById('generoMascotaAlta');
const descripcionMascota = document.getElementById('descripcionMascota');
const direccionMascota = document.getElementById('direccionMascota');
const contactoMascota = document.getElementById('contactoMascota');
const imagenMascota = document.getElementById('imagenMascota');

//inicializo elemntos Adopción
const formDar = document.getElementById('formularioDar');

const seccionAdoptar = document.getElementById('formularioAdopcion');
const inputNombreUsuario = document.getElementById('nombreUsuario');
const inputEdadUsuario = document.getElementById('edadUsuario');
const selectTipoMascota = document.getElementById('tipoMascota');
const selectGeneroMascota = document.getElementById('generoMascota');
const botonFormulario = document.getElementById('botonFormulario');
const seccionTarjetasPadre = document.getElementById('tarjetas');
const seccionTarjetas = document.getElementById('listaTarjetas');
const tituloTarjetas = document.getElementById('tituloTarjetas');

// Inicializo un arreglo de ejemplos cargado, y el arreglo filtrado que se carga con el localStorage
let arregloMascotas = [
    mascota1 = new Mascota('Lenny', 2, 'Gato', 'Macho', 'Chiquito y mimoso, blanquito', 'Río Grande 76', 'https://www.instagram.com/', ''),
    mascota2 = new Mascota('León', 2, 'Perro', 'Macho', 'Peludo, juguetón e intenso', 'Gral Paz 120', 'https://www.instagram.com/', ''),
    mascota3 = new Mascota('Ramón', 5, 'Gato', 'Macho', 'Viejito, pero el más compañero', 'Punta del Sauce 2318', 'https://www.instagram.com/', ''),
    mascota4 = new Mascota('Flopy', 3, 'Perro', 'Hembra', 'La más fiel de todas', 'Buenos Aires 495', 'https://www.instagram.com/', ''),
    mascota5 = new Mascota('Lucy', 2, 'Perro', 'Hembra', 'Chiquitita, vive en depto!', 'Obispo Oro 43', 'https://www.instagram.com/', ''),
    mascota6 = new Mascota('Lima', 2, 'Gato', 'Hembra', 'Micha castrada peluda, le gusta bañarse', 'Pasaje Fournier 22', 'https://www.instagram.com/', ''),
    mascota7 = new Mascota('Ichi', 2, 'Gato', 'Macho', 'Es tímido pero muy mimoso', 'Salta 542', 'https://www.instagram.com/', ''),
    mascota8 = new Mascota('Chicho', 2, 'Perro', 'Macho', 'No hay perro más obediente', 'Cachiyaco 533', 'https://www.instagram.com/', ''),
    mascota9 = new Mascota('Tosty', 2, 'Gato', 'Hembra', 'Muy hiperactiva', 'Velez Sasrfield 5000', 'https://www.instagram.com/', ''),
    mascota10 = new Mascota('Yuki', 2, 'Gato', 'Hembra', 'La más fotogénica', 'Gobernación 105', 'https://www.instagram.com/', ''),
    mascota11 = new Mascota('Manolo', 2, 'Gato', 'Macho', 'Mimoso y charlatán', 'Bower 54', 'https://www.instagram.com/', ''),
];

obtenerImagenURL();

arregloMascotas = JSON.parse(localStorage.getItem('arregloMascotas')) || arregloMascotas;
let arregloFiltrado = JSON.parse(localStorage.getItem('arregloFiltrado')) || [];



let hizoBusqueda = false;
dibujarTarjetas(arregloFiltrado);



//eventos
//eventos
//eventos
//eventos
//eventos
//eventos


// Validar campos de "adoptar" y mostrar tarjetas
botonFormulario.addEventListener('click', function (event) {
    event.preventDefault();
    hizoBusqueda = true;
    validar();
});

// Validar campos de "dar en adopcion" y crear nueva mascota

botonCrearMascota.addEventListener('click', function (event) {
    event.preventDefault();
    validarMascota();
})

// Mostrar seccion adoptar y tarjetas
botonQuieroAdoptar.addEventListener('click', function (event) {
    event.preventDefault();

    seccionAdoptar.classList.remove('d-none');
    seccionTarjetasPadre.classList.remove('d-none');
    seccionDarEnAdopcion.classList.add('d-none');
    header.classList.add('d-none');
});

// Mostrar seccion dar en adopcion
botonQuieroDarEnAdopcion.addEventListener('click', function (event) {
    event.preventDefault();

    seccionDarEnAdopcion.classList.remove('d-none');
    seccionAdoptar.classList.add('d-none');
    seccionTarjetasPadre.classList.add('d-none');
    header.classList.add('d-none');

});



//objetos
//objetos
//objetos
//objetos
//objetos

function Mascota(nombre, edad, tipo, genero, anotaciones, direccion, contacto, imagen) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.genero = genero;
    this.anotaciones = anotaciones;
    this.contacto = contacto;
    this.imagen = imagen;
    this.direccion = direccion;
}

//Funciones 
//Funciones 
//Funciones 
//Funciones 
//Funciones 
//Funciones 


//Función Fetch que obtiene imágenes de mascotas de Apis
function obtenerImagenURL(){
    arregloMascotas.forEach(masc => {
        let imagen; 

        if (masc.tipo.toLowerCase() == 'gato') {
            imagen =  fetch('https://aws.random.cat/meow').then(resp => resp.json()).then(data => masc.imagen = data.file);
            
            return imagen;
        } else {
            imagen =  fetch('https://random.dog/woof.json').then(resp => resp.json()).then(data =>  masc.imagen = data.url);
            
            return imagen;
        }
    });
}







//Función que maqueta las tarjetas según si existe una búsqueda o si es la primera vez
function dibujarTarjetas(arreglo) {

    if (arreglo.length < 1) {
        tituloTarjetas.innerHTML = 'Completá los campos para visualizar resultados';
    } else if (hizoBusqueda) {
        tituloTarjetas.innerHTML = 'Estos son los perfiles que coinciden con tus filtros';
    } else {
        tituloTarjetas.innerHTML = 'Resultados de tu última búsqueda';
    }

    //limpio el HTML
    seccionTarjetas.innerHTML = "";

    //seteo el nuevo arreglo para el localStorage
    localStorage.removeItem('arregloFiltrado');
    localStorage.setItem('arregloFiltrado', JSON.stringify(arreglo));



    //recorro el arreglo y agrego el nuevo HTML
    arreglo.forEach(item => {

        const { imagen, nombre, edad, tipo, genero, anotaciones, contacto, direccion } = item;

        let nodo = document.createElement('div');
        nodo.classList.add("swiper-slide");
        const tarjetaHtml = `
        <div class="d-flex flex-column">
            <img src="${imagen}"
                alt="foto de mascota">
            <div class="container">
                <h3>${nombre}, ${edad} meses</h3>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-paw"></i>
                    <h4 class="ms-2 mb-0">${tipo}</h4>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-venus-mars"></i>
                    <h4 class="ms-2 mb-0">${genero}</h4>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4 class="ms-2 mb-0">${direccion}</h4>
                </div>
                <p class="mt-2 parrafoTarjeta">${anotaciones}
                </p>

                <div class="d-flex justify-content-center">
                    <a href="${contacto}" target="_blank"
                        class="btn btn-light">Contactar
                        dueño</a>
                </div>
            </div>
        </div>`;
        nodo.innerHTML = tarjetaHtml;
        seccionTarjetas.appendChild(nodo);

        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
            observer: true,
            loop: true
        });

    });




}

//Función que valida el form "quiero adoptar"
function validar() {

    //si no están completos todos los campos, lanza una alerta

    if (inputNombreUsuario.value != "" && inputEdadUsuario.value != "" && selectTipoMascota.value != 'seleccione' && selectGeneroMascota.value != 'seleccione') {

        //si es menor de 16, lanza un error
        if (parseInt(inputEdadUsuario.value) < 16) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Tenés que ser mayor de 16 para adoptar',
                timer: 2000,
                showConfirmButton: false,
                width: '30%'
            })
        } else {

            //notifica que se cargaron los datos y está filtrando

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cargando perfiles...',
                timer: 2000,
                showConfirmButton: false,
                width: '30%'
            })

            //filtro por tipo

            switch (selectTipoMascota.value) {
                case 'gato': {
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo.toLowerCase() == 'gato');
                } break;
                case 'perro': {
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo.toLowerCase() == 'perro');
                } break;
                case 'todos': {
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo.toLowerCase() == 'perro' || item.tipo.toLowerCase() == 'gato');
                } break;
            }

            //filtro por genero

            switch (selectGeneroMascota.value) {
                case 'macho': {
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero.toLowerCase() == 'macho');
                } break;
                case 'hembra': {
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero.toLowerCase() == 'hembra');
                } break;
                case 'todos': {
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero.toLowerCase() == 'macho' || item.genero.toLowerCase() == 'hembra');
                } break;
            }

            dibujarTarjetas(arregloFiltrado);


        }

    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Completa todos los datos',
            timer: 2000,
            showConfirmButton: false,
            width: '30%'
        })
    }
}

//Función que valida el form "quiero dar en adopción"
function validarMascota() {
    if (nombreMascota.value == '' || edadMascota.value == '' || descripcionMascota.value == '' || direccionMascota.value == '' ||
        contactoMascota.value == '' || imagenMascota.value == '' || tipoMascotaAlta.value == 'seleccione' || generoMascotaAlta.value == 'seleccione') {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Completa todos los datos',
            timer: 2000,
            showConfirmButton: false,
            width: '30%'
        })
    }
    else {
        nuevaMascota = new Mascota(nombreMascota.value, parseInt(edadMascota.value), tipoMascotaAlta.value, generoMascotaAlta.value,
            descripcionMascota.value, direccionMascota.value, contactoMascota.value, imagenMascota.value);
        arregloMascotas.push(nuevaMascota);
        localStorage.setItem('arregloMascotas', JSON.stringify(arregloMascotas));

        formDar.reset();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mascota cargada correctamente',
            timer: 2000,
            showConfirmButton: false,
            width: '30%'
        });
    }
}