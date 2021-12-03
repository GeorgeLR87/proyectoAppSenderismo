const mongoose = require('mongoose');
const Route = require("./../models/Route")
require('dotenv').config()

//data base conection
mongoose.connect('mongodb+srv://Sinuhe:Sijhez-29@ironhack.b4qtr.mongodb.net/senderismo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//dabaBase
 
const routes =[
{
    title:"Nevado de Toluca (Periferia Cráter) - México",
    state:"Estado de México",
    town: "Calimaya",
    altitude:4677,
    lodging:"Hotel del Real",
    magicTown:"Zinacantepec",
    hardness:20,
     description: "Sábado 16 marzo 2019 Salimos 7:00am de CDMX(2200 msnm) y llegamos tipo 9:00am al parqueo # 1 (3200msnm).Importante mencionar que el oficial de seguridad del parqueo cobraba 50 pesos en la entrada del parqueo, cuando el precio real es de 40, acá se observa la CORRUPCIÓN de ciertos funcionarios que quieren sacar provecho de los turistas, y eso que ibamos con guías mexicanos. Llegamos al parqueo, dejamos nuestro coche y aquí tomamos un transporte que nos llevó al parqueo #2 (3900msnm). De camino logramos ver un cuervo, yo pensaba que eran pequeños, pero llegan a medir hasta 60cm, era enorme la bestia !Empezamos a caminar 9:50am, al inicio hay que ir despacio ya que la altura golpea. Decidimos hacer una ruta bien bonita, algo técnica. Cuando llegamos al paso del Quetzal decidimos girar a la izquierda, a las 10:30am estábamos en el Pico Humboldt, tiene buenas vistas al Izta y al Popo. Luego continuamos la travesía de forma que se camina por la periferia del cráter, hasta llegar al Pico del Águila en 2:35min (2da cumbre). Acá tomamos la merienda y charlamos con otros visitantes. A partir de aquí es una ruta con partes técnicas y de mucho cuidado por las piedras y descensos empinados. Se sigue caminando por la fila, este trayecto es muy bonito, mucha roca y después de 5h llegamos al pico del Fraile, cima principal con 4680 msnm. Desde varias partes altas se toman fotos espectaculares a las lagunas del Sol (grande) y Luna (pequeña), así como al ombligo (pequeña montaña que separa las lagunas). Acá tomamos más fotos y comimos, para emprender lo que sería un rápido descenso. El sendero va justo a la derecha de la cañada del oso, cuando llega al cruce 'peña del oso' se puede subir a la misma o seguir bajando como hicimos nosotros. Se sigue bajando hasta llegar a los pastizales alpinos y después se entra en un bonito bosque hasta salir a una calle de lastre que nos lleva al parqueo # 1 donde estaba nuestro coche. Esta ruta se podría hacer en sentido inverso y sería más exigente! Nota: la altura de parqueo superior creo que esta mal, al ser grabada con telefono aveces falla, creo que era 3800msnm. Nos hizo un clima genial, mientras escribo esto me siento asoleado! En mi caso utilice esta empresa, Bernardo resulto ser un gran guía: https://www.mexicotravesias.com/", 
    imgUrl1:"https://s2.wklcdn.com/image_84/2546808/34196002/22363670Master.jpg",
    imgUrl2:"https://s1.wklcdn.com/image_84/2546808/34196002/22373836Master.jpg",
    imgUrl3:"https://s2.wklcdn.com/image_84/2546808/34196008/22374314Master.jpg",
    imgUrl4:"https://s2.wklcdn.com/image_84/2546808/34196008/22374308Master.jpg",
    imgUrl5:"https://s2.wklcdn.com/image_84/2546808/34196006/22374200Master.jpg",
    imgUrl6:"https://s1.wklcdn.com/image_84/2528148/22916396/14526790Master.jpg",
    postedBy: "Sinuhé Jardínez Hernández"
},{
    title:"La Malinche, México",
    state:"Tlaxcala - San Luis",
    town: "Huamantla",
    altitude:4442,
    lodging:"Hotel Cuamanco Huamantla",
    magicTown:"Huamantla",
    hardness:40,
    description: "Continuando el proceso de aclimatación para el Iztaccíhuatl y el Pico de Orizaba nos trasladamos al estado de Tlaxcala para conquistar La Malinche. Llegamos al bosque de La Malinche a unas cabañas muy bonitas y bien equipadas. Ahí descansamos y al amanecer iniciamos la caminata por el bosque con un ascenso gradual que se pone muy empinado al acercarse al páramo. Ya en el páramo se inicia el ascenso por una ladera bastante vertical en la última parte hay mucha roca suelta al llegar a la cumbre." ,
    imgUrl1:"https://s2.wklcdn.com/image_45/1356321/12382076/9977264Master.jpg",
    imgUrl2:"https://s0.wklcdn.com/image_45/1356321/12382076/9977268Master.jpg",
    imgUrl3:"https://s2.wklcdn.com/image_45/1356321/12382079/7598591Master.jpg",
    imgUrl4:"https://s1.wklcdn.com/image_45/1356321/12382081/7598593Master.jpg",
    imgUrl5:"https://s2.wklcdn.com/image_45/1356321/12382076/9977261Master.jpg",
    imgUrl6:"https://s0.wklcdn.com/image_45/1356321/12382076/9977271Master.jpg",
    
    postedBy: "Sinuhé Jardínez Hernández"
}
];

const createRoutes =  async()=>{
    const newRoute = await Route.create(routes)
    console.log("Nueva ruta creada:", newRoute)
    mongoose.connection.close()
}
createRoutes()