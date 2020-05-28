/*Api del Carrusel*/

var url="http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?&fields=created,author.name,taxonomy.name,image.styles.square_circle,title&type=receta&limit=6";

var api;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api = jsonData;


//Meter API Imagenes


        var imagen = document.getElementsByClassName("image")[0];    
        document.getElementsByClassName("image")[0].innerHTML='<img src="' + api.data[0].image.styles.square_circle + '" alt="">';

        var imagen = document.getElementsByClassName("image")[1];    
        document.getElementsByClassName("image")[1].innerHTML='<img src="' + api.data[1].image.styles.square_circle + '" alt="">';
        
        var imagen = document.getElementsByClassName("image")[2];    
        document.getElementsByClassName("image")[2].innerHTML='<img src="' + api.data[2].image.styles.square_circle + '" alt="">';

        var imagen = document.getElementsByClassName("image")[3];    
        document.getElementsByClassName("image")[3].innerHTML='<img src="' + api.data[3].image.styles.square_circle + '" alt="">';

        var imagen = document.getElementsByClassName("image")[4];    
        document.getElementsByClassName("image")[4].innerHTML='<img src="' + api.data[4].image.styles.square_circle + '" alt="">';

        var imagen = document.getElementsByClassName("image")[5];    
        document.getElementsByClassName("image")[5].innerHTML='<img src="' + api.data[5].image.styles.square_circle + '" alt="">';

//Meter API en la Tarjeta

        //for(let i=0 ; i<api.data.length; i++){
        let i =0;
        do{

        var imagen = document.getElementsByClassName("category")[0];    
        document.getElementsByClassName("category")[0].innerHTML= api.data[i].taxonomy.name;

        var imagen = document.getElementsByClassName("title")[0];    
        document.getElementsByClassName("title")[0].innerHTML= api.data[i].title;

        let time=api.data[i].created;
        theDate = new Date(time * 1000);
        dateString = theDate.toLocaleDateString();


        var imagen = document.getElementsByClassName("fecha")[0];    
        document.getElementsByClassName("fecha")[0].innerHTML= dateString;

        var imagen = document.getElementsByClassName("autor")[0];    
        document.getElementsByClassName("autor")[0].innerHTML= api.data[i].author.name;
        
        
        if(i>5){
            i=-1
        }

        i++

        }
        while(api.data.length>7)
        //}
      
$(document).ready(function(){
  $('.carrusel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          
          centerMode: false,
          centerPadding: '60px',
          slidesToShow: 1
        }
      },
    ]
  });
});

})


/*Api de la card triple*/

var datos;

fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=title,taxonomy,name,image,styles,square_circles&limit=3&type=receta")
.then(function (response) {
    return response.json();
})
.then(function (jsonData) {
    datos = jsonData;
    //Meter valores en div id imagen
    var card1 = document.getElementById("Hamburguesa").innerHTML;    
    document.getElementById("Hamburguesa").innerHTML ='<img src="' + datos.data[0].image.styles.square_circle + '" alt="">';
    //categoria
    var healthy = document.getElementById("categoria0").innerHTML;    
    document.getElementById("categoria0").innerHTML = datos.data[0].taxonomy.name;
    //titulo
    var titulo = document.getElementById("titulo0").innerHTML;    
    document.getElementById("titulo0").innerHTML = datos.data[0].title;
    
    //segunda card
    var card1 = document.getElementById("Ensaladas").innerHTML;    
    document.getElementById("Ensaladas").innerHTML ='<img src="' + datos.data[1].image.styles.square_circle + '" alt="">';
    //categoria
    var healthy = document.getElementById("categoria1").innerHTML;    
    document.getElementById("categoria1").innerHTML = datos.data[1].taxonomy.name;
    //titulo
    var titulo = document.getElementById("titulo1").innerHTML;    
    document.getElementById("titulo1").innerHTML = datos.data[1].title;

    //tercera card
    var card1 = document.getElementById("Pastas").innerHTML;    
    document.getElementById("Pastas").innerHTML ='<img src="' + datos.data[2].image.styles.square_circle + '" alt="">';
    //categoria
    var healthy = document.getElementById("categoria2").innerHTML;    
    document.getElementById("categoria2").innerHTML = datos.data[2].taxonomy.name;
    //titulo
    var titulo = document.getElementById("titulo2").innerHTML;    
    document.getElementById("titulo2").innerHTML = datos.data[2].title;
})


/*Api de las cards grandes*/

var naranja;
var api = "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?&fields=image.styles.square_circle,taxonomy.name,title,author.name,summary,created&type=receta&limit=2&offset=6"
fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        naranja = jsonData;
        //se meterion valores dentro de cerebro
        //Meter valores en div id imagen
        var imagen1 = document.getElementsByClassName("imagen1")[0];    
        document.getElementsByClassName("imagen1")[0].innerHTML ='<img src="' + naranja.data[0].image.styles.square_circle + '" alt="">' ;

        //categoria
        var verde = document.getElementsByClassName("verde")[0];    
        document.getElementsByClassName("verde")[0].innerHTML = naranja.data[0].taxonomy.name;

        //title
        var titulo = document.getElementsByClassName("titulo")[0];    
            document.getElementsByClassName("titulo")[0].innerHTML = naranja.data[0].title;
        
        //fecha 
        let time=naranja.data[0].created;
        theDate = new Date(time * 1000);
        dateString = theDate.toLocaleDateString();
            
        var fecha = document.getElementsByClassName("fecha")[0];    
        document.getElementsByClassName("fecha")[0].innerHTML = dateString ;

        //autor
        var autor = document.getElementsByClassName("autor")[0];    
            document.getElementsByClassName("autor")[0].innerHTML = naranja.data[0].author.name;



        //Meter valores en div titulo class
        var two = document.getElementsByClassName("two")[0];    
        document.getElementsByClassName("two")[0].innerHTML= naranja.data[0].summary;
    
    


        //se meterion valores dentro de pinki
        //Meter valores en div id imagen
        var imagen2 = document.getElementsByClassName("imagen2")[0];    
        document.getElementsByClassName("imagen2")[0].innerHTML ='<img src="' + naranja.data[1].image.styles.square_circle + '" alt="">' ;

        //categoria
        var verde2 = document.getElementsByClassName("verde")[1];    
        document.getElementsByClassName("verde")[1].innerHTML = naranja.data[1].taxonomy.name;

        //title
        var portada = document.getElementsByClassName("portada")[0];    
        document.getElementsByClassName("portada")[0].innerHTML = naranja.data[1].title;
        
        //fecha 
        let time2=naranja.data[1].created;
        theDate2 = new Date(time * 1000);
        dateString2 = theDate.toLocaleDateString();
            
        var fecha2 = document.getElementsByClassName("fecha")[1];    
        document.getElementsByClassName("fecha")[1].innerHTML = dateString2 ;

        //autor
        var autor2 = document.getElementsByClassName("autor")[1];    
        document.getElementsByClassName("autor")[1].innerHTML = naranja.data[1].author.name;



        //Meter valores en div titulo class
        var one = document.getElementsByClassName("one")[0];    
        document.getElementsByClassName("one")[0].innerHTML= naranja.data[1].summary;



})


/*Api de las cards Izquierda y derecha*/

var datos;

function izquierda(categoria = false) {
    console.log("Holi :3");

    var url = "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?&fields=title,author.name,image.styles.square_circle,created,taxonomy.name,summary&type=receta&limit=3&offset=8"

    if (categoria != false) {
        url += "" + categoria;
    }

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            datos = jsonData;

            var recetaLayout = document.getElementsByClassName("card-izquierda").item(0).cloneNode(true);
            document.getElementsByClassName("izquierda").item(0).innerHTML = "";

            datos.data.forEach(function (dato) {
                console.log(dato);

                let timeStamp_value=dato.created;

                theDate = new Date(timeStamp_value * 1000);
                dateString = theDate.toLocaleDateString();


                var receta = recetaLayout.cloneNode(true);
                receta.getElementsByClassName("card-izquierda-img").item(0).getElementsByTagName("img").item(0).setAttribute("src", dato.image.styles.square_circle);
                receta.getElementsByClassName("thebest").item(0).innerHTML = dato.taxonomy.name;
                receta.getElementsByClassName("titulo").item(0).innerHTML = dato.title;
                receta.getElementsByClassName("autor").item(0).innerHTML = dato.author.name;
                receta.getElementsByClassName("fecha").item(0).innerHTML = dateString;
                receta.getElementsByClassName("descripcion").item(0).innerHTML = dato.summary;

                document.getElementsByClassName("izquierda").item(0).append(receta);
            })
        })
}


var datos2;

function derecha(categoria = false) {
    console.log("Holi 2");

    //var url = "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=title,author.name,image.styles.square_circle,created,taxonomy.name&type=receta&limit=5&offset=14"
    var url = "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?&fields=title,author.name,image.styles.square_circle,created,taxonomy.name&type=receta&limit=5&offset=11"


    if (categoria != false) {
        url += "" + categoria;
    }

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            datos2 = jsonData;

            var recetaLayout = document.getElementsByClassName("card-derecha").item(0).cloneNode(true);
            document.getElementsByClassName("derecha").item(0).innerHTML = "";

            datos2.data.forEach(function (dato) {
                console.log(dato);

                let timeStamp_value=dato.created;
                theDate = new Date(timeStamp_value * 1000);
                dateString = theDate.toLocaleDateString();

                var receta = recetaLayout.cloneNode(true);
                receta.getElementsByClassName("card-derecha-img").item(0).getElementsByTagName("img").item(0).setAttribute("src", dato.image.styles.square_circle);
                receta.getElementsByClassName("titulo").item(0).innerHTML = dato.title;
                receta.getElementsByClassName("autor").item(0).innerHTML = dato.author.name;
                receta.getElementsByClassName("fecha").item(0).innerHTML = dateString;

                document.getElementsByClassName("derecha").item(0).append(receta);
            })
        })
}


window.onload = function() {
    derecha();
    izquierda();
}

    
