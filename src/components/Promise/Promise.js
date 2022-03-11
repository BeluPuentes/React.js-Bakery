function imprimirProductos (){
    return new Promise ((resolve, reject)=>{
      setTimeout(()=> {
        let productos = [
          {id:1, nombre:"Torta Oreo",descripcion:"Torta a base de galletitas oreo con dulce de leche", precio:"$2000", pictureUrl:"dir"},
          {id:2, nombre:"Lemon Pie",descripcion:"Masa quebrada, rellena de crema de limon y decorada con merengue italiano", precio:"$1500", pictureUrl:"dir"},
          {id:3, nombre:"Red Velvet",descripcion:"Torta de tres capas de color rojo, decorada con yn glaseado de queso cremoso", precio:"$2500", pictureUrl:"dir"},
          {id:4, nombre:"Chocotorta",descripcion:"Torta a base de galletitas chocolinas con dulce de leche. Un clasico argentino", precio:"$2000", pictureUrl:"dir"},
          {id:5, nombre:"Rogel",descripcion:"Torta tradicional Argentina hecha por capas de galletitas hojaldradas, rellena con dulce de leche y terminada con un merengue Italiano ", precio:"$2500", pictureUrl:"dir"},
          {id:6, nombre:"Torta Brownie",descripcion:"Torta a base de de brownie con dulce de leche y terminada con merengue Italiano", precio:"$2000", pictureUrl:"dir"},
          {id:7, nombre:"Marquise",descripcion:"Torta humeda de chocolate con dulce de leche y terminado con merengue Italiano", precio:"$2000", pictureUrl:"dir"},
        ]
        if (productos.length===0){
          reject("No hay productos disponibles")
        }
        else{
          resolve(productos)
        }
  
      }, 2000)
    })
  }
  
  imprimirProductos ().then((productos)=>{
    console.log(productos)
    return productos
  
  }).then ((productos)=>{
    if (productos.length===1){
      console.log("Queda solo 1 producto")
    }
  }).catch((err)=>{
    console.log("No hay productos en stock")
  }).finally(()=>{
    console.log("Ya termino la promesa") 
  })
  
  async function verinfo(){
    let productos2 = await imprimirProductos().then((productos)=>{
    return productos
  })
  console.log(productos2)
  }
  
  verinfo()