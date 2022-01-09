//ESTABLEZCO EL ARRAY CARRITO
let carro = []

//CREO UN OBJETO CONSTRUCTOR SIMULANDO SER UNA CUENTA, OBTENIENDO DATOS MEDIANTE INPUTS
class comprador {
    constructor (nombre, telefono, direccionemail, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccionemail = direccionemail
        this.direccion = direccion}
    }


//ESTABLEZCO ARRAY DE OBJETOS
const productes = [{

    id:1,
    verdura: 'PAPA',
    precio: 40,
    proveedor: 'colombiano', 
    foto: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1"
},
    
    {id:2,
    verdura: 'TOMATE',
    precio: 50,
    proveedor: 'venezolano',
foto: "https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Corona-1.jpg" }, 
 {
    id:3,
    verdura: 'LECHUGA',
    precio: 50,
    proveedor: 'boliviano',
foto:"https://media.istockphoto.com/photos/lettuce-isolated-isolated-on-white-background-picture-id181072765?k=20&m=181072765&s=612x612&w=0&h=8gpOrTTz71R9QgfP64ALOCNFW8Pat5arsVzDQamOu5k="},
  {
    id:4,
    verdura: 'ZANAHORIA',
    precio: 100,
    proveedor: 'brasilero',
foto:"https://soycomocomo.es/media/2019/03/zanahorias.jpg"},
 {
    id:5,
    verdura: 'PEPINO',
    precio: 130,
    proveedor: 'colombiano',
foto:"https://st2.depositphotos.com/1494134/7007/v/600/depositphotos_70075971-stock-illustration-cucumber-and-slice-isolated-on.jpg"},
{
    id:6,
    verdura: 'CALABAZA',
    precio: 200,
    proveedor: 'colombiano',
foto:"https://static.libertyprim.com/files/familles/potiron-large.jpg?1569317112"},
 {
    id:7,
    verdura: 'HUEVO (DOCENA)',
    precio: 120,
    proveedor: 'colombiano',
foto:"https://mejorconsalud.as.com/wp-content/uploads/2018/09/huevos-gallina-768x512.jpg"},
    
{id:8,
verdura: 'MANZANA',
precio: 150,
proveedor: 'brasilero',
foto:"https://www.eluniversal.com.mx/sites/default/files/2016/09/07/manzana.jpg"},
    
{id:9,
verdura: 'BANANA',
precio: 200,
proveedor: 'boliviano',
foto:"https://imagenes.elpais.com/resizer/ignf5hRqPoNrcNeilF3aB9CKy-M=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/HE3SMC3L7Z7XENXLHLLKE3CDEA.jpg"},
    
{id:10,
verdura: 'MANDARINA',
precio: 125,
proveedor: 'colombiano',
foto:"https://cdn2.salud180.com/sites/default/files/field/image/2017/11/mandraina.jpg"},
    
{id:11,
verdura: 'NARANJA',
precio: 90,
proveedor: 'boliviano',
foto:"https://st.depositphotos.com/1000141/1963/i/950/depositphotos_19638723-stock-photo-fresh-orange-fruit-with-leaf.jpg"},
    
{id:12,
verdura: 'UVA',
precio: 300,
proveedor: 'venezolano',
foto:"https://www.catadelvino.com/uploads/3122014171035180713.jpg"},
    
{id:13,
verdura: 'KIWI',
precio: 200,
proveedor: 'colombiano',
foto:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"}]
//CREO LOS OBJETOS EN EL HTML MEDIANTE DOM
function mostrarProductos(listado) {

    $("#productosgenerados").empty();

    for (const objeto of listado) {
        $("#productosgenerados").append(

`<div class="card" id="card${objeto.id}">
<img class="card-img-top" id="hola123" src="${objeto.foto}" alt="card image cap" width="250px" height="150px">
    <h5 class="card-title">${objeto.verdura}</h5>
    <p class="card-text">${objeto.proveedor}</p>
    <p class="card-text"><b> $ ${objeto.precio}</b></p>
    <button id= "${objeto.id}"> AGREGAR A LA COMPRA</button><div class="card-footer text-muted"> </div>`
        );
        document.getElementById (objeto.id).onclick = () => {
                  agregarAlCarrito (objeto)
        }
    }
    
} 

mostrarProductos(productes);

//creo objeto constructor para cada producto del carrito

       class ProductoCarrito {
        constructor(objProd) {
            this.id = objProd.id;
            this.foto = objProd.foto;
            this.verdura = objProd.verdura;
            this.precio = objProd.precio;
            this.proveedor = objProd.proveedor
            this.cantidad = 1;
        }
    }
       //CREO UNA TABLA PARA QUE EL USUARIO VEA LOS PRODUCTOS INGRESADOS
const agregarAlCarrito = (aidi) => {
    
$("#count").empty()
let encontrado = carro.find(p => p.id == aidi.id);
    if (encontrado == undefined) {
        let prodACarrito = new ProductoCarrito(aidi);
        carro.push(prodACarrito);
       // console.log(carro);
        //console.log (totalCarrito())
        
        //agregamos una nueva fila a la tabla de carrito
        $("#tablabody").append(`
            <tr id='fila${prodACarrito.id}'>
            <td> ${prodACarrito.id} </td>
            <td> ${prodACarrito.verdura}</td>
            <td id='cant${prodACarrito.id}'> ${prodACarrito.cantidad}</td>
            <td> ${prodACarrito.proveedor}</td>
            <td> ${prodACarrito.precio}</td>
            <td id='eliminar${prodACarrito.id}'> <button class='btn btn-danger'>ELIMINAR</button>
            `)
            //CREO BOTON PARA ELIMINAR PRODUCTO DEL CARRITO Y DE LA TABLA
$(`#eliminar${prodACarrito.id}`).click (function(){
    let eliminarprod= carro.findIndex (prod =>prod.id == prodACarrito.id)


    if (carro[eliminarprod].cantidad > 1) {
        carro[eliminarprod].cantidad += -1
        $(`#cant${prodACarrito.id}`).html(carro[eliminarprod].cantidad)
        totalCarrito
       // console.log (totalCarrito())
        $("#toutal").html(`Total: $ ${totalCarrito()}`)
        $("#pago").html(`1 cuota $ ${totalCarrito()}`)
        $("#pago2").html(`6 cuotas $ ${totalCarrito()/6}`)
    }
  else{carro.splice(eliminarprod,1)
$(`#fila${prodACarrito.id}`).remove()
$("#toutal").html(`Total: $ ${totalCarrito()}`)
$("#pago").html(`1 cuota $ ${totalCarrito()}`)
$("#pago2").html(`6 cuotas $ ${totalCarrito()/6}`)
//console.log (totalCarrito())
}
  
  

    

})
        
    } else {
        //pido al carro la posicion del producto 
        let posicion = carro.findIndex(p => p.id == aidi.id);
        let cantidades = carro[posicion].cantidad += 1;
       $(`#cant${aidi.id}`).html(cantidades);
      
    }
   $("#toutal").html(`Total: $ ${totalCarrito()}`)
   $("#pago").html(`1 cuota $ ${totalCarrito()}`)
   $("#pago2").html(`6 cuotas $ ${totalCarrito()/6}`)
   
   
}



//SUMANDO EL TOTAL
 function totalCarrito () {
    let suma = 0;
    for (const elemento of carro) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;

 }

//AL MOMENTO DE FINALIZAR LA COMPRA, AL DARLE CLICK SE ELIMINA EL BOTON Y SE CREA UN FORMULARIO

$("#botonFinalizar").click (function (){
    $("#botonFinalizar").empty()
    let jeison = JSON.stringify(carro)
    sessionStorage.setItem("compra", jeison)
    $("#formulario").append (`<form onsubmit="return false">
    <label for="nombre"> NOMBRE </label>
    <input id="nombre"class="form-control" type= "text" value= "Pablo">
    <label for="email">EMAIL</label>
    <input id="email" class="form-control" type= "email" value= "pablito@live.com.ar"></input>
    <label for="tel">TELEFONO</label>
    <input id="tel" class="form-control" type= "number" value= "1168649084"></input>
    <label for="dire">DIRECCION</label>
    <input id="dire"class="form-control" type= "text" value= "Lugano" name="dire" required></input>
    <input id = "botonconfirmar" class="btn btn-primary" type="submit" value="Confirmar compra">
    </form>
    `
)
//AL MOMENTO DE CONFIRMAR LA COMPRA SE PRESIONA EL BOTON , SE LIMPIA EL STORAGE Y SE ALERTA
document.getElementById ("botonconfirmar").onclick = () => {
    sessionStorage.clear()
    let nombrecliente= $("#nombre").val()
    let dire = $("#dire").val()
    let tel =  $("#tel").val()
    let email =  $("#email").val()
    Swal.fire({
        icon: 'success',
        title: 'EXCELENTE',
        text: `GRACIAS POR SU COMPRA ${nombrecliente} , SERA ENVIADO A ${dire}`,
        
      }
      )
//LA INFORMACION OBTENIDA DE LOS INPUTS SE GUARDARAN EN EL OBJETO CONSTRUCTOR Y SE CONSOLOGEARA
   const usuario1 = new comprador (nombrecliente,tel,email,dire) 
   console.log (usuario1)
}
}
)




