

//inicializo elemntos del DOM

let inputNombreUsuario = document.getElementById('nombreUsuario');
let inputEdadUsuario = document.getElementById('edadUsuario');
let selectTipoMascota = document.getElementById('tipoMascota');
let selectGeneroMascota = document.getElementById('generoMascota');
let botonFormulario = document.getElementById('botonFormulario');
let seccionTarjetas = document.getElementById('listaTarjetas');

// Inicializo un arreglo de ejemplos cargado, y el arreglo filtrado que se carga con el localStorage
let arregloMascotas = [
    mascota1 = new Mascota('Lenny', 2, 'Gato', 'Macho', 'Chiquito y mimoso, blanquito', 'Río Grande 76', 'https://www.instagram.com/', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl'),
    mascota2 = new Mascota('Leon', 2, 'Perro', 'Macho', 'Peludo, juguetón e intenso', 'Gral Paz 120', 'https://www.instagram.com/', 'https://thumbs.dreamstime.com/b/perro-de-perrito-en-el-parque-50880187.jpg'),
    mascota3 = new Mascota('Ramón', 5, 'Gato', 'Macho', 'Viejito, pero el más compañero', 'Punta del Sauce 2318', 'https://www.instagram.com/', 'https://www.clarin.com/img/2022/05/03/hEUHNtPrq_360x240__1.jpg'),
    mascota4 = new Mascota('Flopy', 3, 'Perro', 'Hembra', 'La más fiel de todas', 'Buenos Aires 495', 'https://www.instagram.com/', 'https://okdiario.com/img/2020/06/17/5-aspectos-basicos-sobre-el-embarazo-de-tu-perrita-655x368.jpg'),
    mascota5 = new Mascota('Lucy', 2, 'Perro', 'Hembra', 'Chiquitita, vive en depto!', 'Obispo Oro 43', 'https://www.instagram.com/', 'https://nombres-para.wiki/wp-content/uploads/2018/06/Nombres-para-perritas.jpg'),
    mascota6 = new Mascota('Lima', 2, 'Gato', 'Hembra', 'Micha castrada peluda, le gusta bañarse', 'Pasaje Fournier 22', 'https://www.instagram.com/', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/como-alimentar-una-gata-durante-el-embarazo.jpg?itok=HGnK-t-y'),
    mascota7 = new Mascota('Ichi', 2, 'Gato', 'Macho', 'Es tímido pero muy mimoso', 'Salta 542', 'https://www.instagram.com/', 'https://blog.mascotaysalud.com/wp-content/uploads/2015/08/gato-recien-nacido.jpg'),
    mascota8 = new Mascota('Chicho', 2, 'Perro', 'Macho', 'No hay perro más obediente', 'Cachiyaco 533', 'https://www.instagram.com/', 'https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6'),
    mascota9 = new Mascota('Tosty', 2, 'Gato', 'Hembra', 'Muy hiperactiva', 'Velez Sasrfield 5000', 'https://www.instagram.com/', 'https://www.tqpets.com.ec/wp-content/uploads/2019/08/gatita_longeva_fb.png'),
    mascota10 = new Mascota('Yuki', 2, 'Gato', 'Hembra', 'La más fotogénica', 'Gobernación 105', 'https://www.instagram.com/', 'https://nfnatcane.es/blog/wp-content/uploads/2019/07/gatita-con-hermosos-ojos-verdes.jpg'),
    mascota11 = new Mascota('Manolo', 2, 'Gato', 'Macho', 'Mimoso y charlatán', 'Bower 54', 'https://www.instagram.com/', 'http://mascotafiel.com/wp-content/uploads/2016/10/que-raza-son-los-gatos-naranja.jpg'),
];

let arregloFiltrado = JSON.parse(localStorage.getItem('arregloFiltrado')) || [];

dibujarTarjetas(arregloFiltrado);




//eventos
//eventos
//eventos
//eventos
//eventos
//eventos

botonFormulario.addEventListener('click', function (event) {
    event.preventDefault();
    validar();
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
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo == 'Gato');
                } break;
                case 'perro': {
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo == 'Perro');
                } break;
                case 'todos': {
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo == 'Perro' || item.tipo == 'Gato');
                } break;
            }

            //filtro por genero

            switch (selectGeneroMascota.value) {
                case 'macho': {
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero == 'Macho');
                } break;
                case 'hembra': {
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero == 'Hembra');
                } break;
                case 'todos': {
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero == 'Macho' || item.genero == 'Hembra');
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




function dibujarTarjetas(arreglo) {
    //limpio el HTML
    seccionTarjetas.innerHTML = '';
    
    //seteo el nuevo arreglo para el localStorage
    localStorage.removeItem('arregloFiltrado');
    localStorage.setItem('arregloFiltrado', JSON.stringify(arregloFiltrado));



    //recorro el arreglo y agrego el nuevo HTML
    arreglo.forEach(item => {

        const {imagen, nombre, edad, tipo, genero, anotaciones, contacto, direccion} = item;

        let tarjetaHtml = `<div class="swiper-slide">
                        <div class="d-flex flex-column">
                            <img src="${imagen}"
                                alt="">
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
                        </div>
                    </div>`

        seccionTarjetas.innerHTML += tarjetaHtml;        
    });

    
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });


}