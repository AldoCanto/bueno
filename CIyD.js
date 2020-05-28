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