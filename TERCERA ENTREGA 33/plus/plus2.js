//INGRESANDO LOS DATOS DE CADA PROVEEDOR MEDIANTE JQUERY Y EVENTOS
$("#infoColombia").click (function(){
$("#colombia").fadeToggle("slow")
})
$("#infoBrasil").click (function(){
    $("#brasil").fadeToggle("slow")
    })
$("#infoBolivia").click (function(){
     $("#bolivia").fadeToggle("slow")
    })
$("#infoVenezuela").click (function(){
    $("#venezuela").fadeToggle("slow")
     })
//OBTENIENDO CLASIFICACION DEL USUARIO Y GUARDANDOLA EN LOCALSTORAGE (simulando una base de datos)
     $("#yes").click (
     function (){Swal.fire({
      icon: 'success',
      title: 'GRACIAS POR SU OPINION. SE A AÑADIDO UNA BUENA CALIFICACION A NUESTRA PAGINA 😊',
      timer: 2000,
      timerProgressBar: true
})

        sessionStorage.setItem ("calificacion","BUENA")
    }
     )

     $("#no").click(function(){
      Swal.fire({
        icon: 'question',
        title: '¿QUE DEBERIAMOS CORREGIR?',
        input: 'text'})

        sessionStorage.setItem ("calificacion","MALA")
      })
        

      //OBTENIENDO DATOS DEL AJAX
      
         const URLREAL= "https://api-dolar-argentina.herokuapp.com/api/real/nacion"
         $.ajax({
            method: "GET",
            url: URLREAL,
            success: function (data) {
                $("#cotreal").append (`<h4>REAL COMPRA:$ ${data.compra}</h4>`)
            }
         })

        
         $.getJSON("cotizaciones.json", function (respuesta, estado) {
            if(estado === "success"){
              let misDatos = respuesta;
              for (const dato of misDatos) {
                $("#cotcol").prepend(`
                                        <h4>PESO COLOMBIANO COMPRA:$${dato.compra}</h4>
                                     `)
              }  
            }
            })
          

                $.getJSON("cotizacionbolivia.json", function (respuesta, estado) {
                    if(estado === "success"){
                      let misDatos = respuesta;
                      for (const dato of misDatos) {
                        $("#cotbol").prepend(`
                                                <h4>PESO BOLIVIANO COMPRA:$${dato.compra}</h4>
                                             `)
                      }  
                    }
                    })
                    $.getJSON("cotizacioncolombia.json", function (respuesta, estado) {
                        if(estado === "success"){
                          let misDatos = respuesta;
                          for (const dato of misDatos) {
                            $("#cotven").prepend(`
                                                    <h4>BOLIVARES COMPRA:$${dato.compra}</h4>
                                                 `)
                          }  
                        }
                        })