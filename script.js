
let botonInicioPausa = document.getElementById('boton-inicio-pausa');

let botonReiniciar = document.getElementById('boton-reiniciar');

let textoCronometro = document.getElementById('cronometro');

let registro = document.getElementById('registro');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;

let estadoCronometro = 'pausado';

function actualizarCronometro(){
    segundos++;

    if(segundos / 60 == 1){
        segundos = 0;
        minutos++;

        if(minutos / 60 == 1){
            minutos = 0;
            horas++;
        }
    }

    let segundosConFormato = asignarFormato(segundos);
    let minutosConFormato = asignarFormato(minutos);
    let horasConFormato = asignarFormato(horas);

    textoCronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

    registro.innerText = `Ultimo Registro: ${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidad){
    return unidad < 10 ? '0' + unidad : unidad;
}

botonInicioPausa.addEventListener('click', function(){

    if(estadoCronometro == 'pausado'){
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar'); 
        estadoCronometro = 'andando';
    }else{

        window.clearInterval(intervaloDeTiempo)
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';

    }

    

})

botonReiniciar.addEventListener('click', function(){
    window.clearInterval(intervaloDeTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    textoCronometro.innerText = '00:00:00';

    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');

    estadoCronometro = 'pausado';

})