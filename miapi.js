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