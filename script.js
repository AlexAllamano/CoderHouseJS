alert('Hola');
alert('Este sitio aún está en construcción');
alert('Pero no te preocupes. Podes ir registrando tus datos');

let nombreUsuario = prompt('¿Cuál es tu nombre?');

while (nombreUsuario === '' || nombreUsuario == null) {
    nombreUsuario = prompt('Decinos tu nombre! Solo lo usaremos para el nombre de usuario');
}


let edad = prompt('Genial ' + nombreUsuario + '. Ahora vamos a validar tu edad. ¿Cuántos años tenes?');


while (edad == '') {
    edad = prompt('Necesitamos que introduzcas tu edad');
}

if (parseInt(edad) < 16) {
    while (parseInt(edad) < 16) {
        edad = prompt('Necesitamos que seas mayor de 16 años');
    }
}

alert('Excelente! Cumplís con los requisitos');

let accion = prompt('Ahora decinos qué te gustaría hacer: \n 1 : Adoptar \n 2 : Dar en adopción \n 3 : Ser hogar provisorio');

console.log(accion == '' || accion != '1' || accion != '2' || accion != '3');

let banderaAccion = true;
if (accion == '' || (accion != '1' && accion != '2' && accion != '3')) {
    banderaAccion = false;
}

while (banderaAccion == false) {
    mostrarAlerta();
    accion = prompt('Ahora decinos qué te gustaría hacer: \n 1 : Adoptar \n 2 : Dar en adopción \n 3 : Ser hogar provisorio');
    if (accion == '1' || accion == '2' || accion == '3') {
        banderaAccion = true;
    }
};

if (accion == '1') {

    let opcion = prompt('Amamos esa actitud <3. ¿Qué te gustaría adoptar? \n 1 : Gato \n 2 : Perro \n \n Pronto agregaremos soporte para más máscotas')

    let banderaOpcion = true;
    let mascota;

    if (opcion == '' || (opcion != '1' && opcion != '2' && opcion != '3')) {
        banderaOpcion = false;
    }

    while (banderaOpcion == false) {
        mostrarAlerta();
        opcion = prompt('Amamos esa actitud <3. ¿Qué te gustaría adoptar? \n 1 : Gato \n 2 : Perro \n \n Pronto agregaremos soporte para más máscotas')
        if (opcion == '1' || opcion == '2' || opcion == '3') {
            banderaOpcion = true;
        }
    }

    switch (opcion) {
        case '1': mascota = 'gato'; break;
        case '2': mascota = 'perro'; break;
    }

    let generoOpcion = prompt('Genial. Te gustaría que tu ' + mascota + ' sea... \n 1 : Macho \n 2 : Hembra');
    let genero;
    let banderaGenera = true;

    if (generoOpcion == '' || (generoOpcion != '1' && generoOpcion != '2' && generoOpcion != '3')) {
        banderaGenera = false;
    }
    while (banderaOpcion == false) {
        mostrarAlerta();
        generoOpcion = prompt('Genial. Te gustaría que tu ' + mascota + ' sea... \n 1 : Macho \n 2 : Hembra');
        if (generoOpcion == '1' || generoOpcion == '2' || generoOpcion == '3') {
            banderaGenera = true;
        }
    }

    switch (generoOpcion) {
        case '1': genero = 'macho'; break;
        case '2': genero = 'hembra'; break;
    }

    prompt('Bien ' + nombreUsuario + ': Dejanos un correo electrónico y te vamos a estar enviando un catálogo de todos los perfiles disponibles que hay de ' + mascota + ' ' + genero);


} else if (accion == '2') {
    console.log('estoy en accion 2');
    enDesarrollo();

} else if (accion == '3') {
    enDesarrollo();
}

function mostrarAlerta() {
    alert('Introducí una opción válida!');
}

function enDesarrollo() {
    alert('Esta funcionalidad está en desarrollo!');
}