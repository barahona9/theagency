const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    }); 
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}

$window = $(window);
$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position > 100) { // if body is scrolled down by 300 pixels
        $('.contenido-navegacion').addClass('sticky');

        // to get rid of jerk
        header_height = $('.contenido-navegacion').innerHeight();
        $('body').css('padding-top' , header_height);
    } else {
        $('body').css('padding-top' , '0');
        $('.contenido-navegacion').removeClass('sticky');
    }
 });