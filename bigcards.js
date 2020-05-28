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



    

