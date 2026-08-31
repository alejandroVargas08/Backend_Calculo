export const calcularVelocidad=(req,res)=>{
    const {distancia,tiempo}=req.body;

    const velocidad=distancia/tiempo;
    res.status(200).json({
        distancia,
        tiempo,
        velocidad,
        resultado:`El resultado es ${velocidad}`
        });
}

export const calcularDistancia=(req,res)=>{
    const {velocidad, tiempo}=req.body;

    const distancia=velocidad*tiempo;

    res.status(200).json({
        operacion:"Distancia",
        velocidad,
        tiempo,
        resultado: `El resultado es ${distancia}`,
        unidad: "Km"
    });
};

export const calcularTiempo=(req,res)=>{
    const {distancia, velocidad}=req.body;

    const tiempo=distancia/velocidad; 

    res.status(200).json({
        operacion:"Tiempo",
        distancia,
        velocidad,
        resultado:`Resultado es ${tiempo}`,
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
        resultado: `El resultado es ${fuerza}`,
        unidad: "N"
    });
};
export const calcularPeso=(req,res)=>{
    const {masa, gravedad}=req.body;

    const peso=masa*gravedad;

    res.status(200).json({
        operacion:"Peso",
        masa,
        gravedad,
        resultado: `El resultado es ${peso}`,
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
        resultado: `El resultado es ${EC}`,
        unidad: "J"
    });
};


