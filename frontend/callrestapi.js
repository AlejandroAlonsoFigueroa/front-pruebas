var url = "http://localhost:8097/api/instrumentos";



function guardarInstrumento(){
   var nombre = $('#nombre').val();
   var descripcion = $('#descripcion').val();
   var precio = $('#precio').val();

   var miInstrumento = {
      name: nombre,
      description:  descripcion, 
      price: precio
   };
   console.log(miInstrumento);

   $.ajax({
      url: url, 
      type: 'post', 
      dataType: 'json',
      contentType: 'application/json', 
      success: function(data){
         console.log(data);
         $("#resultado").html(JSON.stringify(data.user));
      },
      data: JSON.stringify(miInstrumento),

   });
}



function obtenerInstrumentos(){
   
   console.log(url);
   


   $.getJSON(url, function(json){
      
      

      var vectorInstrumentos = json.users;

      console.log(vectorInstrumentos);

      var  htmlTableInstrumentos = "<table border = 1'>";


      vectorInstrumentos.forEach(function(item) {
         console.log(item);
         htmlTableInstrumentos += "<tr>" + 
                                          "<td>" + item.id +"</td>"+
                                          "<td>" + item.name +"</td>"+
                                          "<td>" + item.description +"</td>"+
                                          "<td>" + item.price +"</td>"+
                                 "</tr>"
      })
       
      htmlTableInstrumentos += "</table>"
      
      $('#resultado').html(htmlTableInstrumentos);

   })
}