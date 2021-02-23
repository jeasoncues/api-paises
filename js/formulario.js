 const formulario = document.getElementById('formulario');
 const inputFormulario = document.getElementById('inputFormulario');


 //funcion formulario 

 const formularioCliente = data => {
     //presionar tecla
     formulario.addEventListener('keyup', e => {
         //para evitar que se actualize la web
         e.preventDefault()
         //lo que vendra en el input lo convierte a minusculas
         const letraCliente = inputFormulario.value.toLowerCase()
         //console.log(letraCliente)

         //elementos que se almacenaran en el sitio web
         const arrayFiltrado =  data.filter(item => {
             //obtenemos la letra de la api
             const letraApi =  item.name.toLowerCase()
             
             //evaluacion de la api
             if(letraApi.indexOf(letraCliente) != -1){
                 //retorna lo que coincide de lo que tiene la api y lo que esta escribiendo el cliente
                 return item
             } 
         })
         //llamamos a la funcion banderillas para que llame el array filtrado en la web
         banderillas(arrayFiltrado)

     })
 }