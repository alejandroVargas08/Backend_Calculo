export const calcularVelocidad=(req,res)=>{
    const {distancia,tiempo}=req.body;

    const velocidad=Number((distancia/tiempo).toFixed(2));
    res.status(200).json({
        distancia,
        tiempo,
        velocidad,
        resultado:`El resultado de la Velocidad es ${velocidad} Km/h`
        });
}

export const calcularDistancia=(req,res)=>{
    const {velocidad, tiempo}=req.body;

    const distancia=velocidad*tiempo;

    res.status(200).json({
        operacion:"Distancia",
        velocidad,
        tiempo,
        resultado: `El resultado de la Distancia es ${distancia}`,
        unidad: "Km"
    });
};

//tiempo
export const calcularTiempo=(req,res)=>{
    const {distancia, velocidad}=req.body;

    const tiempo=distancia/velocidad; 

    res.status(200).json({
        operacion:"Tiempo",
        distancia,
        velocidad,
        resultado:`El resultado del Tiempo es ${tiempo}`,
        unidad: "h"
    });
};

//Dinamica
export const calcularFuerza=(req,res)=>{
    const {masa, aceleracion}=req.body;

    const fuerza=masa*aceleracion;

    res.status(200).json({
        operacion:"Fuerza",
        masa,
        aceleracion,
        resultado: `El resultado de la Fuerza es ${fuerza}`,
        unidad: "N"
    });
};

//Peso
export const calcularPeso=(req,res)=>{
    const {masa, gravedad}=req.body;

    const peso=masa*gravedad;

    res.status(200).json({
        operacion:"Peso",
        masa,
        gravedad,
        resultado: `El resultado del Peso es ${peso}`,
        unidad: "kg"
    });
};

//Energia cinetica
export const calcularEC=(req,res)=>{
    const {masa, velocidad}=req.body;

    const EC=masa*(velocidad*2)/2;

    res.status(200).json({
        operacion:"Energia Cinetica",
        masa,
        velocidad,
        resultado: `El resultado de la Energia Cinetica es ${EC}`,
        unidad: "J"
    });
};

//Aceleracion
export const calcularAceleracion=(req,res)=>{
    const {velocidadF, velocidadI, tiempo}=req.body;

    const aceleracion=velocidadF-velocidadI/tiempo;

    res.status(200).json({
        operacion:"Aceleración",
        velocidadF,
        velocidadI,
        tiempo,
        resultado: `El resultado de la Aceleracion es ${aceleracion}`,
        unidad: "m/s2"
    });
};


