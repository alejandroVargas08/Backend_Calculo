//Movimiento
export const validarVelocidad=(req,res,next)=>{

    const{distancia, tiempo}=req.body
    if(distancia===undefined || tiempo===undefined){
        return res.status(400).json({
            mensaje:"La distancia y en el tiempo son datos obligatorios"
        });
    };

    if(typeof distancia!== "number" || typeof tiempo !== "number"){
        return res.status(400).json({
            mensaje:"Ambos deben ser números"
        });
    };

    if (distancia < 0 || tiempo < 0) {
        return res.status(400).json({
            mensaje:"La distancia y el tiempo no pueden ser negativos"
        });
    };

    if(tiempo === 0){
        return res.status(400).json({
            mensaje:"El tiempo no puede ser cero"
        });
    };

    next(); 

}

export const validarDistancia=(req,res,next)=>{

    const{velocidad, tiempo}=req.body

    if(velocidad ===undefined || tiempo===undefined){
        return res.status(400).json({
            mensaje:"La velocidad y en el tiempo son datos obligatorios"
        });
    };

    if(typeof velocidad!== "number" || typeof tiempo !== "number"){
        return res.status(400).json({
            mensaje:"Ambos deben ser números"
        });
    };

    if (velocidad < 0 || tiempo < 0) {
        return res.status(400).json({
            mensaje:"La velocidad y el tiempo no pueden ser negativos"
        });
    };

    if(tiempo === 0){
        return res.status(400).json({
            mensaje:"El tiempo no puede ser cero"
        });
    };

    next(); 
}

export const validarTiempo=(req,res,next)=>{

    const{distancia, velocidad}=req.body

    if(distancia===undefined || velocidad===undefined){
        return res.status(400).json({
            mensaje:"La distancia y la velocidad son datos obligatorios"
        });
    };

    if(typeof distancia!== "number" || typeof velocidad !== "number"){
        return res.status(400).json({
            mensaje:"Ambos deben ser números"
        });
    };

    if (distancia < 0 || velocidad < 0) {
        return res.status(400).json({
            mensaje:"La distancia y la velocidad no pueden ser negativos"
        });
    };

    if(velocidad === 0){
        return res.status(400).json({
            mensaje:"La velocidad no puede ser cero"
        });
    };

    next(); 

}

//Dinamica
export const validarFuerza=(req,res,next)=>{

    const{masa, aceleracion}=req.body

    if(masa===undefined || aceleracion===undefined){
        return res.status(400).json({
            mensaje:"La masa y la aceleracion son datos obligatorios"
        });
    };

    if(typeof masa!== "number" || typeof aceleracion !== "number"){
        return res.status(400).json({
            mensaje:"Ambos deben ser números"
        });
    };

    if (masa < 0 || aceleracion < 0) {
        return res.status(400).json({
            mensaje:"La masa y la aceleracion no pueden ser negativos"
        });
    };

    next(); 

}

export const validarPeso=(req,res,next)=>{

    const{masa, gravedad}=req.body

    if(masa===undefined || gravedad===undefined){
        return res.status(400).json({
            mensaje:"La masa y la gravedad son datos obligatorios"
        });
    };

    if(typeof masa!== "number" || typeof gravedad !== "number"){
        return res.status(400).json({
            mensaje:"Ambos deben ser números"
        });
    };

    if (masa < 0 || gravedad < 0) {
        return res.status(400).json({
            mensaje:"La masa y la gravedad no pueden ser negativos"
        });
    };

    next(); 

}

//Energia cinetica
export const validarEC=(req,res,next)=>{

    const{masa, velocidad}=req.body

    if(masa===undefined || velocidad===undefined){
        return res.status(400).json({
            mensaje:"La masa y la velocidad son datos obligatorios"
        });
    };

    if(typeof masa!== "number" || typeof velocidad !== "number"){
        return res.status(400).json({
            mensaje:"Ambos deben ser números"
        });
    };

    if (masa < 0 || velocidad < 0) {
        return res.status(400).json({
            mensaje:"La masa y la velocidad no pueden ser negativos"
        });
    };

    next(); 

}
export const validarAceleracion = (req, res, next) => {

    const { velocidadI, velocidadF, tiempo } = req.body

    if (velocidadI === undefined || velocidadF === undefined || tiempo === undefined) {
        return res.status(400).json({
            mensaje: "La velocidad inicial, la velocidad final y el tiempo son datos obligatorios"
        });
    };

    if (typeof velocidadI !== "number" || typeof velocidadF !== "number" || typeof tiempo !== "number") {
        return res.status(400).json({
            mensaje: "Todos los valores deben ser números"
        });
    };

    if (tiempo < 0) {
        return res.status(400).json({
            mensaje: "El tiempo no puede ser negativo"
        });
    };

    if (tiempo === 0) {
        return res.status(400).json({
            mensaje: "El tiempo no puede ser cero"
        });
    };

    next();

}