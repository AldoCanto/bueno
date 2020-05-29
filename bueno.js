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
            
                
    // responsive: [{       
    //   breakpoint: 768,       
    //   settings: {         
    //     slidesToShow: 1,         
    //     slidesToScroll: 1,         
    //     autoplay: true,         
    //     autoplaySpeed: 2500,       
    //   }     
    // }]
  });
});

})