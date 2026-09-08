import express from "express"; //importaos la dependencia de express
import fisicaRoutes from "./routes/fisica.routes.js"
import cors from "cors"

const app=express(); //asignamos la dependencia a una constante
const port=3001; // indicamos el puerto

app.use(express.json());//vamos a trabajar con formato json
app.use(cors())

app.use("/fisica",fisicaRoutes)


app.listen(port,()=>{
    console.log(`La aplicacion esta corriendo en el puerto ${port}`)
})  //le indicamos al servidor por que puerto va a salir la aplicacion, mostramos un mensdaje indicativo