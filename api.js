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

        var imagen2 = document.getElementsByClassName("image")[1];    
        document.getElementsByClassName("image")[1].innerHTML='<img src="' + api.data[1].image.styles.square_circle + '" alt="">';
        
        var imagen3 = document.getElementsByClassName("image")[2];    
        document.getElementsByClassName("image")[2].innerHTML='<img src="' + api.data[2].image.styles.square_circle + '" alt="">';

        var imagen4 = document.getElementsByClassName("image")[3];    
        document.getElementsByClassName("image")[3].innerHTML='<img src="' + api.data[3].image.styles.square_circle + '" alt="">';

        var imagen5 = document.getElementsByClassName("image")[4];    
        document.getElementsByClassName("image")[4].innerHTML='<img src="' + api.data[4].image.styles.square_circle + '" alt="">';

        var imagen6 = document.getElementsByClassName("image")[5];    
        document.getElementsByClassName("image")[5].innerHTML='<img src="' + api.data[5].image.styles.square_circle + '" alt="">';

//Meter API en la Tarjeta

        //for(let i=0 ; i<api.data.length; i++){
        
        
        // let i =0;
        // do{
        
      

        //Card 2

        var category2 = document.getElementsByClassName("category")[0];    
        document.getElementsByClassName("category")[0].innerHTML= api.data[0].taxonomy.name;

        var title2 = document.getElementsByClassName("title")[0];    
        document.getElementsByClassName("title")[0].innerHTML= api.data[0].title;

        let time1=api.data[1].created;
        theDate1 = new Date(time1 * 1000);
        dateString1 = theDate1.toLocaleDateString();

        var fecha2 = document.getElementsByClassName("fecha")[0];    
        document.getElementsByClassName("fecha")[0].innerHTML= dateString1;

        var autor2 = document.getElementsByClassName("autor")[0];    
        document.getElementsByClassName("autor")[0].innerHTML= api.data[0].author.name;
        
        //Card 3

        var category3 = document.getElementsByClassName("category")[1];    
        document.getElementsByClassName("category")[1].innerHTML= api.data[1].taxonomy.name;

        var title3 = document.getElementsByClassName("title")[1];    
        document.getElementsByClassName("title")[1].innerHTML= api.data[1].title;

        let time2 =api.data[1].created;
        theDate2 = new Date(time2 * 1000);
        dateString2 = theDate2.toLocaleDateString();

        var fecha3 = document.getElementsByClassName("fecha")[1];    
        document.getElementsByClassName("fecha")[1].innerHTML= dateString2;

        var autor3 = document.getElementsByClassName("autor")[1];    
        document.getElementsByClassName("autor")[1].innerHTML= api.data[1].author.name;


        //Card 4

        var category4 = document.getElementsByClassName("category")[2];    
        document.getElementsByClassName("category")[2].innerHTML= api.data[2].taxonomy.name;

        var title4 = document.getElementsByClassName("title")[2];    
        document.getElementsByClassName("title")[2].innerHTML= api.data[2].title;

        let time3=api.data[2].created;
        theDate3 = new Date(time3 * 1000);
        dateString3 = theDate3.toLocaleDateString();

        var fecha4 = document.getElementsByClassName("fecha")[2];    
        document.getElementsByClassName("fecha")[2].innerHTML= dateString3;

        var autor4 = document.getElementsByClassName("autor")[2];    
        document.getElementsByClassName("autor")[2].innerHTML= api.data[2].author.name;
        

        //Card 5

        var category5 = document.getElementsByClassName("category")[3];    
        document.getElementsByClassName("category")[3].innerHTML= api.data[3].taxonomy.name;

        var title5 = document.getElementsByClassName("title")[3];    
        document.getElementsByClassName("title")[3].innerHTML= api.data[3].title;

        let time4=api.data[3].created;
        theDate4 = new Date(time4 * 1000);
        dateString4 = theDate4.toLocaleDateString();

        var fecha5 = document.getElementsByClassName("fecha")[3];    
        document.getElementsByClassName("fecha")[3].innerHTML= dateString4;

        var autor5 = document.getElementsByClassName("autor")[3];    
        document.getElementsByClassName("autor")[3].innerHTML= api.data[3].author.name;
        

        //Card 6

        var category6 = document.getElementsByClassName("category")[4];    
        document.getElementsByClassName("category")[4].innerHTML= api.data[4].taxonomy.name;

        var title6 = document.getElementsByClassName("title")[4];    
        document.getElementsByClassName("title")[4].innerHTML= api.data[4].title;

        let time5=api.data[4].created;
        theDate5 = new Date(time5 * 1000);
        dateString5 = theDate5.toLocaleDateString();

        var fecha6 = document.getElementsByClassName("fecha")[4];    
        document.getElementsByClassName("fecha")[4].innerHTML= dateString5;

        var autor6 = document.getElementsByClassName("autor")[4];    
        document.getElementsByClassName("autor")[4].innerHTML= api.data[4].author.name;
        

          //Card 1        

          var category = document.getElementsByClassName("category")[5];    
          document.getElementsByClassName("category")[5].innerHTML= api.data[5].taxonomy.name;
  
          var title = document.getElementsByClassName("title")[5];    
          document.getElementsByClassName("title")[5].innerHTML= api.data[5].title;
  
          let time0 = api.data[0].created;
          theDate0 = new Date(time0 * 1000);
          dateString0 = theDate0.toLocaleDateString();
  
          var fecha = document.getElementsByClassName("fecha")[5];    
          document.getElementsByClassName("fecha")[5].innerHTML= dateString0;
  
          var autor = document.getElementsByClassName("autor")[5];    
          document.getElementsByClassName("autor")[5].innerHTML= api.data[5].author.name;
          


        // if(i>5){
        //     i=-1
        // }

        // i++

        // }
        // while(api.data.length>7)
        //}
      
$(document).ready(function(){
  $('.carrusel').slick({
    SelectorSpecificity: (2, 0, 2),
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
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

    
