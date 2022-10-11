arregloMascotas = [
    mascota1 = new Mascota('Lenny', 2, 'Gato', 'Macho', 'Chiquito y mimoso, blanquito'),
    mascota2 = new Mascota('Leon', 2, 'Perro', 'Macho', 'Peludo, juguetón e intenso'),
    mascota3 = new Mascota('Ramón', 5, 'Gato', 'Macho', 'Viejito, pero el más compañero'),
    mascota4 = new Mascota('Flopy', 3, 'Perro', 'Hembra', 'La más fiel de todas'),
    mascota5 = new Mascota('Lucy', 2, 'Perro', 'Hembra', 'Chiquitita, vive en depto!'),
    mascota6 = new Mascota('Lima', 2, 'Gato', 'Hembra', 'Micha castrada peluda, le gusta bañarse'),
    mascota7 = new Mascota('Ichi', 2, 'Gato', 'Macho', 'Es tímido pero muy mimoso'),
    mascota8 = new Mascota('Chicho', 2, 'Perro', 'Macho', 'No hay perro más obediente'),
    mascota9 = new Mascota('Tosty', 2, 'Gato', 'Hembra', 'Muy hiperactiva'),
    mascota10 = new Mascota('Yuki', 2, 'Gato', 'Hembra', 'La más fotogénica'),
    mascota11 = new Mascota('Manolo', 2, 'Gato', 'Macho', 'Mimoso y charlatán'),
];



alert('Hola \n Este sitio aún está en construcción \n Pero no te preocupes. Podes ir registrando tus datos');


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

switch (accion) {
    case '1': {

        let opcion = prompt('Amamos esa actitud <3. ¿Qué te gustaría adoptar? \n 1 : Gato \n 2 : Perro \n \n Pronto agregaremos soporte para más máscotas')

        let mascota;
        let banderaOpcion = true;

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
            case '1': mascota = 'Gato'; break;
            case '2': mascota = 'Perro'; break;
        }

        let generoOpcion = prompt('Genial. Te gustaría que tu ' + mascota + ' sea... \n 1 : Macho \n 2 : Hembra \n 3 : Es indistinto');
        let genero;
        let banderaGenera = true;

        if (generoOpcion == '' || (generoOpcion != '1' && generoOpcion != '2' && generoOpcion != '3')) {
            banderaGenera = false;
        }
        while (banderaGenera == false) {
            mostrarAlerta();
            generoOpcion = prompt('Genial. Te gustaría que tu ' + mascota + ' sea... \n 1 : Macho \n 2 : Hembra \n 3 : Es indistinto');
            if (generoOpcion == '1' || generoOpcion == '2' || generoOpcion == '3') {
                banderaGenera = true;
            }
        }

        switch (generoOpcion) {
            case '1': genero = 'Macho'; break;
            case '2': genero = 'Hembra'; break;
            case '3': genero = 'macho o hembra'; break;
        }

        arregloFiltrado = [];

        arregloMascotas.forEach(aux => {
            if(mascota == aux.tipo){
                if(genero == aux.genero ){
                    arregloFiltrado.push(aux);
                }
                else if(genero == 'macho o hembra'){
                    arregloFiltrado.push(aux);
                }
            }
        });

        alert('A continuación te mostramos las máscotas que se ajustan a tus filtros:')

        arregloFiltrado.forEach(aux =>{
            alert(aux.mostrarDatos());
        });

    } break;
    case '2': {

        tipo = prompt('¿Qué tipo de máscota tenés para dar en adopción? \n 1 : Gato \n 2 : Perro');

        let banderaTipo = true;

        if (tipo == '' || (tipo != '1' && tipo != '2')) {
            banderaTipo = false;
        }

        while (banderaTipo == false) {
            mostrarAlerta();
            tipo = prompt('¿Qué tipo de máscota tenés para dar en adopción? \n 1 : Gato \n 2 : Perro')
            if (tipo == '1' || tipo == '2') {
                banderaTipo = true;
            }
        }

        switch (tipo) {
            case '1': tipo = 'gato'; break;
            case '2': tipo = 'perro'; break;
        }

        let nombre = prompt('¿Y con qué nombre queres publicar tu ' + tipo + '?');

        while (nombre === '' || nombre == null) {
            nombre = prompt('Necesitamos un nombre para el perfil tu mascota');
        }

        let edad = prompt('¿Cuántos años tiene tu mascota?');

        while (edad == '') {
            edad = prompt('Necesitamos que introduzcas tu edad');
        }

        let genero = prompt('Y tu ' + tipo + ' es... \n 1 : Macho \n 2 : Hembra');
        let banderaGenero = true;

        if (genero == '' || (genero != '1' && genero != '2')) {
            banderaGenero = false;
        }
        while (banderaGenero == false) {
            mostrarAlerta();
            genero = prompt('Y tu ' + tipo + ' es... \n 1 : Macho \n 2 : Hembra');
            if (genero == '1' || genero == '2' || genero == '3') {
                banderaGenero = true;
            }
        }

        switch (genero) {
            case '1': genero = 'macho'; break;
            case '2': genero = 'hembra'; break;
        }

        let descripcion = prompt('En este espacio podes dejar una descripción de tu mascota');

        mascotaParaDar = new Mascota(nombre, edad, tipo, genero, descripcion);

        alert('Este es el perfil que cargamos: \n' + mascotaParaDar.mostrarDatos());

    } break;
    case '3': {
        enDesarrollo();
    } break;
}

//objetos
//objetos
//objetos
//objetos
//objetos

function Mascota(nombre, edad, tipo, genero, anotaciones) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.genero = genero;
    this.anotaciones = anotaciones;

    this.mostrarDatos = function () {
        return 'Datos de mascota: \n Nombre - ' + this.nombre + '. \n Edad - ' +
            this.edad + '. \n Tipo - ' + this.tipo + '. \n Género - ' + this.genero + '. \n Descripción - ' +
            anotaciones + '.';
    }
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