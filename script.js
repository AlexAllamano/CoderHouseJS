


// Inicializo un arreglo de ejemplos cargado, y el arreglo filtrado que se carga con el localStorage
let arregloMascotas = [
    mascota1 = new Mascota('Lenny', 2, 'Gato', 'Macho', 'Chiquito y mimoso, blanquito', 'https://www.instagram.com/', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl'),
    mascota2 = new Mascota('Leon', 2, 'Perro', 'Macho', 'Peludo, juguetón e intenso', 'https://www.instagram.com/', 'https://thumbs.dreamstime.com/b/perro-de-perrito-en-el-parque-50880187.jpg'),
    mascota3 = new Mascota('Ramón', 5, 'Gato', 'Macho', 'Viejito, pero el más compañero', 'https://www.instagram.com/', 'https://www.clarin.com/img/2022/05/03/hEUHNtPrq_360x240__1.jpg'),
    mascota4 = new Mascota('Flopy', 3, 'Perro', 'Hembra', 'La más fiel de todas', 'https://www.instagram.com/', 'https://okdiario.com/img/2020/06/17/5-aspectos-basicos-sobre-el-embarazo-de-tu-perrita-655x368.jpg'),
    mascota5 = new Mascota('Lucy', 2, 'Perro', 'Hembra', 'Chiquitita, vive en depto!', 'https://www.instagram.com/', 'https://nombres-para.wiki/wp-content/uploads/2018/06/Nombres-para-perritas.jpg'),
    mascota6 = new Mascota('Lima', 2, 'Gato', 'Hembra', 'Micha castrada peluda, le gusta bañarse', 'https://www.instagram.com/', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/como-alimentar-una-gata-durante-el-embarazo.jpg?itok=HGnK-t-y'),
    mascota7 = new Mascota('Ichi', 2, 'Gato', 'Macho', 'Es tímido pero muy mimoso', 'https://www.instagram.com/', 'https://blog.mascotaysalud.com/wp-content/uploads/2015/08/gato-recien-nacido.jpg'),
    mascota8 = new Mascota('Chicho', 2, 'Perro', 'Macho', 'No hay perro más obediente', 'https://www.instagram.com/', 'https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6'),
    mascota9 = new Mascota('Tosty', 2, 'Gato', 'Hembra', 'Muy hiperactiva', 'https://www.instagram.com/', 'https://www.tqpets.com.ec/wp-content/uploads/2019/08/gatita_longeva_fb.png'),
    mascota10 = new Mascota('Yuki', 2, 'Gato', 'Hembra', 'La más fotogénica', 'https://www.instagram.com/', 'https://nfnatcane.es/blog/wp-content/uploads/2019/07/gatita-con-hermosos-ojos-verdes.jpg'),
    mascota11 = new Mascota('Manolo', 2, 'Gato', 'Macho', 'Mimoso y charlatán', 'https://www.instagram.com/', 'http://mascotafiel.com/wp-content/uploads/2016/10/que-raza-son-los-gatos-naranja.jpg'),
];

localStorage.setItem('arregloMascotas', JSON.stringify(arregloMascotas));

let arregloFiltrado = JSON.parse(localStorage.getItem('arregloFiltrado')) || [];


//inicializo elemntos del DOM

let inputNombreUsuario = document.getElementById('nombreUsuario');
let inputEdadUsuario = document.getElementById('edadUsuario');
let selectTipoMascota = document.getElementById('tipoMascota');
let selectGeneroMascota = document.getElementById('generoMascota');
let botonFormulario = document.getElementById('botonFormulario');
let seccionTarjetas = document.getElementById('listaTarjetas');

arregloFiltrado.forEach(item => {

    let tarjetaHtml = `<div class="swiper-slide">
                    <div class="d-flex flex-column">
                        <img src="${item.imagen}"
                            alt="">
                        <div class="container">
                            <h3>${item.nombre}, ${item.edad} meses</h3>
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-paw"></i>
                                <h4 class="ms-2 mb-0">${item.tipo}</h4>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-venus-mars"></i>
                                <h4 class="ms-2 mb-0">${item.genero}</h4>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4 class="ms-2 mb-0">Río Grande 76</h4>
                            </div>
                            <p class="mt-2 parrafoTarjeta">${item.anotaciones}
                            </p>

                            <div class="d-flex justify-content-center">
                                <a href="${item.contacto}" target="_blank"
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

let validar = () => {

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

            switch(selectTipoMascota.value){
                case 'gato': {
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo == 'Gato');
                }break;
                case 'perro':{
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo == 'Perro');
                }break;
                case 'todos':{
                    arregloFiltrado = arregloMascotas.filter(item => item.tipo == 'Perro' || item.tipo == 'Gato');
                }break;
            }

            //filtro por genero

            switch(selectGeneroMascota.value){
                case 'macho':{
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero == 'Macho');
                }break;
                case 'hembra':{
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero == 'Hembra');
                }break;
                case 'todos':{
                    arregloFiltrado = arregloFiltrado.filter(item => item.genero == 'Macho' || item.genero == 'Hembra');
                }break;
            }

            //seteo el nuevo arreglo para el localStorage
            localStorage.setItem('arregloFiltrado', JSON.stringify(arregloFiltrado));

            //limpio el HTML
            seccionTarjetas.innerHTML = '';

            //recorro el arreglo y agrego el nuevo HTML
            arregloFiltrado.forEach(item => {

                let tarjetaHtml = `<div class="swiper-slide">
                                <div class="d-flex flex-column">
                                    <img src="${item.imagen}"
                                        alt="">
                                    <div class="container">
                                        <h3>${item.nombre}, ${item.edad} meses</h3>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-paw"></i>
                                            <h4 class="ms-2 mb-0">${item.tipo}</h4>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-venus-mars"></i>
                                            <h4 class="ms-2 mb-0">${item.genero}</h4>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <h4 class="ms-2 mb-0">Río Grande 76</h4>
                                        </div>
                                        <p class="mt-2 parrafoTarjeta">${item.anotaciones}
                                        </p>

                                        <div class="d-flex justify-content-center">
                                            <a href="${item.contacto}" target="_blank"
                                                class="btn btn-light">Contactar
                                                dueño</a>
                                        </div>
                                    </div>
                                </div>
                            </div>`

                seccionTarjetas.innerHTML += tarjetaHtml;

                var swiper = new Swiper(".mySwiper", {
                    effect: "cards",
                    grabCursor: true,
                });

            });
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

//eventos

botonFormulario.addEventListener('click', validar);



{/* <div class="swiper-slide">

<div class="d-flex flex-column">
    <img src="https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6"
        alt="">
    <div class="container">
        <h3>León, 3 meses</h3>
        <div class="d-flex align-items-center">
            <i class="fa-solid fa-paw"></i>
            <h4 class="ms-2 mb-0">Perro</h4>
        </div>
        <div class="d-flex align-items-center">
            <i class="fa-solid fa-venus-mars"></i>
            <h4 class="ms-2 mb-0">Macho</h4>
        </div>
        <div class="d-flex align-items-center">
            <i class="fa-solid fa-location-dot"></i>
            <h4 class="ms-2 mb-0">Río Grande 76</h4>
        </div>
        <p class="mt-2 parrafoTarjeta">León es un perrito muy juguetón. Le gusta morder todo
            y
            por ahí
            es medio bruto, pero es bueno.
        </p>

        <div class="d-flex justify-content-center">
            <a href="https://www.instagram.com/" target="_blank"
                class="btn btn-light">Contactar
                dueño</a>
        </div>
    </div>
</div>
</div> */}


// alert('Hola \n Este sitio aún está en construcción \n Pero no te preocupes. Podes ir registrando tus datos');


// let nombreUsuario = prompt('¿Cuál es tu nombre?');

// while (nombreUsuario === '' || nombreUsuario == null) {
//     nombreUsuario = prompt('Decinos tu nombre! Solo lo usaremos para el nombre de usuario');
// }


// let edad = prompt('Genial ' + nombreUsuario + '. Ahora vamos a validar tu edad. ¿Cuántos años tenes?');


// while (edad == '') {
//     edad = prompt('Necesitamos que introduzcas tu edad');
// }

// if (parseInt(edad) < 16) {
//     while (parseInt(edad) < 16) {
//         edad = prompt('Necesitamos que seas mayor de 16 años');
//     }
// }

// alert('Excelente! Cumplís con los requisitos');

// let accion = prompt('Ahora decinos qué te gustaría hacer: \n 1 : Adoptar \n 2 : Dar en adopción \n 3 : Ser hogar provisorio');


// let banderaAccion = true;
// if (accion == '' || (accion != '1' && accion != '2' && accion != '3')) {
//     banderaAccion = false;
// }

// while (banderaAccion == false) {
//     mostrarAlerta();
//     accion = prompt('Ahora decinos qué te gustaría hacer: \n 1 : Adoptar \n 2 : Dar en adopción \n 3 : Ser hogar provisorio');
//     if (accion == '1' || accion == '2' || accion == '3') {
//         banderaAccion = true;
//     }
// };

// switch (accion) {
//     case '1': {

//         let opcion = prompt('Amamos esa actitud <3. ¿Qué te gustaría adoptar? \n 1 : Gato \n 2 : Perro \n \n Pronto agregaremos soporte para más máscotas')

//         let mascota;
//         let banderaOpcion = true;

//         if (opcion == '' || (opcion != '1' && opcion != '2' && opcion != '3')) {
//             banderaOpcion = false;
//         }

//         while (banderaOpcion == false) {
//             mostrarAlerta();
//             opcion = prompt('Amamos esa actitud <3. ¿Qué te gustaría adoptar? \n 1 : Gato \n 2 : Perro \n \n Pronto agregaremos soporte para más máscotas')
//             if (opcion == '1' || opcion == '2' || opcion == '3') {
//                 banderaOpcion = true;
//             }
//         }

//         switch (opcion) {
//             case '1': mascota = 'Gato'; break;
//             case '2': mascota = 'Perro'; break;
//         }

//         let generoOpcion = prompt('Genial. Te gustaría que tu ' + mascota + ' sea... \n 1 : Macho \n 2 : Hembra \n 3 : Es indistinto');
//         let genero;
//         let banderaGenera = true;

//         if (generoOpcion == '' || (generoOpcion != '1' && generoOpcion != '2' && generoOpcion != '3')) {
//             banderaGenera = false;
//         }
//         while (banderaGenera == false) {
//             mostrarAlerta();
//             generoOpcion = prompt('Genial. Te gustaría que tu ' + mascota + ' sea... \n 1 : Macho \n 2 : Hembra \n 3 : Es indistinto');
//             if (generoOpcion == '1' || generoOpcion == '2' || generoOpcion == '3') {
//                 banderaGenera = true;
//             }
//         }

//         switch (generoOpcion) {
//             case '1': genero = 'Macho'; break;
//             case '2': genero = 'Hembra'; break;
//             case '3': genero = 'macho o hembra'; break;
//         }

//         arregloFiltrado = [];

//         arregloMascotas.forEach(aux => {
//             if(mascota == aux.tipo){
//                 if(genero == aux.genero ){
//                     arregloFiltrado.push(aux);
//                 }
//                 else if(genero == 'macho o hembra'){
//                     arregloFiltrado.push(aux);
//                 }
//             }
//         });

//         alert('A continuación te mostramos las máscotas que se ajustan a tus filtros:')

//         arregloFiltrado.forEach(aux =>{
//             alert(aux.mostrarDatos());
//         });

//     } break;
//     case '2': {

//         tipo = prompt('¿Qué tipo de máscota tenés para dar en adopción? \n 1 : Gato \n 2 : Perro');

//         let banderaTipo = true;

//         if (tipo == '' || (tipo != '1' && tipo != '2')) {
//             banderaTipo = false;
//         }

//         while (banderaTipo == false) {
//             mostrarAlerta();
//             tipo = prompt('¿Qué tipo de máscota tenés para dar en adopción? \n 1 : Gato \n 2 : Perro')
//             if (tipo == '1' || tipo == '2') {
//                 banderaTipo = true;
//             }
//         }

//         switch (tipo) {
//             case '1': tipo = 'gato'; break;
//             case '2': tipo = 'perro'; break;
//         }

//         let nombre = prompt('¿Y con qué nombre queres publicar tu ' + tipo + '?');

//         while (nombre === '' || nombre == null) {
//             nombre = prompt('Necesitamos un nombre para el perfil tu mascota');
//         }

//         let edad = prompt('¿Cuántos años tiene tu mascota?');

//         while (edad == '') {
//             edad = prompt('Necesitamos que introduzcas tu edad');
//         }

//         let genero = prompt('Y tu ' + tipo + ' es... \n 1 : Macho \n 2 : Hembra');
//         let banderaGenero = true;

//         if (genero == '' || (genero != '1' && genero != '2')) {
//             banderaGenero = false;
//         }
//         while (banderaGenero == false) {
//             mostrarAlerta();
//             genero = prompt('Y tu ' + tipo + ' es... \n 1 : Macho \n 2 : Hembra');
//             if (genero == '1' || genero == '2' || genero == '3') {
//                 banderaGenero = true;
//             }
//         }

//         switch (genero) {
//             case '1': genero = 'macho'; break;
//             case '2': genero = 'hembra'; break;
//         }

//         let descripcion = prompt('En este espacio podes dejar una descripción de tu mascota');

//         mascotaParaDar = new Mascota(nombre, edad, tipo, genero, descripcion);

//         alert('Este es el perfil que cargamos: \n' + mascotaParaDar.mostrarDatos());

//     } break;
//     case '3': {
//         enDesarrollo();
//     } break;
// }

//objetos
//objetos
//objetos
//objetos
//objetos

function Mascota(nombre, edad, tipo, genero, anotaciones, contacto, imagen) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.genero = genero;
    this.anotaciones = anotaciones;
    this.contacto = contacto;
    this.imagen = imagen;
}

//Funciones 
//Funciones 
//Funciones 
//Funciones 
//Funciones 
//Funciones 

function mostrarAlerta() {
    alert('Introducí una opción válida!');
}

function enDesarrollo() {
    alert('Esta funcionalidad está en desarrollo!');
}