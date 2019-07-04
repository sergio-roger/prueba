
$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf("index") > -1)
    {
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          responsive: true
        });

          // Post
        var post = [
            {
                title: 'Prueba de titulo 1',
                date: "Publicado el: " + moment().format('L'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendu earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel impedit possimus recusandae nulla! earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel" 
                + "earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, "
                +"quidem vel"
            },
            {
                title: 'Prueba de titulo 2',
                date: "Publicado el: " + moment().format('L'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendu earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel impedit possimus recusandae nulla! earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel" 
                + "earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, "
                +"quidem vel"
            },
            {
                title: 'Prueba de titulo 3',
                date: "Publicado el: " + moment().format('L'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendu earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel impedit possimus recusandae nulla! earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel" 
                + "earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, "
                +"quidem vel"
            },
            {
                title: 'Prueba de titulo 4',
                date: "Publicado el: " + moment().format('L'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendu earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel impedit possimus recusandae nulla! earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, quidem vel" 
                + "earum omnis maiores quam labore ullam facilis dignissimos sint alias numquam nesciunt suscipit excepturi corrupti, "
                +"quidem vel"
            }
        ];

        post.forEach((index, date) => {

            var post = `<div class="box-post"> <article class="post">
            <h2>${index.title}</h2>
            <span class="date">${index.date}</span>
            <p>${index.content}</p>
            </article> 
            <a href="#" class="boton-more">Leer mas</a>
            </div>`;
        
            // console.log(post);
            $('#post').append(post);
        });
    }

    // Cambiador de temas
    var theme = $('#theme');

   $('#to-green').click(function(){
       theme.attr("href", "css/theme-green.css");
       console.log(theme);
   });

   $('#to-red').click(function(){
       theme.attr("href", "css/theme-red.css");
       console.log(theme);
    });

    $('#to-blue').click(function(){
        theme.attr("href", "css/theme-blue.css");
        console.log(theme);
    });

    //Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop:0
        }, 500);

        return false;
    });


    // Login Falso
    $('#login form').submit(function(){
        var nombre = $('#txt-name').val();

        localStorage.setItem('txt-nombre', nombre);
    
    });

    var nombre = localStorage.getItem('txt-nombre');

    if(nombre != null || nombre != "undefined")
    {
        var abaout_parrafo =  $('#about p');
        $('#about p').html("<strong>Bienvenido " + nombre +"</strong>");
        abaout_parrafo.append('<a href="#" id="logout">Cerrar sección</a>');
        
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reaload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf("about") > -1){
        console.log("hola cargo Jquery");
        $('#acordeon').accordion();
    }

    // Reloj
    if(window.location.href.indexOf("reloj") > -1){
        
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Contacto
    if(window.location.href.indexOf("Contacto") > -1){
        
        $("#fecha").datepicker({
            dateFormat: 'dd/mm/yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true           
        });
    }
});