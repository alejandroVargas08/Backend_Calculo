import { Router } from "express";
import {validarVelocidad, validarDistancia, validarTiempo, validarFuerza, validarPeso, validarEC, validarAceleracion} from "../middlewares/fisica.middelewares.js";
import {calcularVelocidad, calcularTiempo, calcularDistancia, calcularFuerza, calcularPeso, calcularEC, calcularAceleracion} from "../controllers/fisica.controllers.js";

const router=Router();

//Movimiento
router.post("/velocidad", validarVelocidad, calcularVelocidad);
router.post("/distancia", validarDistancia, calcularDistancia);
router.post("/tiempo", validarTiempo, calcularTiempo);

//Dinamica
router.post("/fuerza", validarFuerza, calcularFuerza);
router.post("/peso", validarPeso, calcularPeso);

//Energia
router.post("/ec", validarEC, calcularEC);

//Acelereacion
router.post("/aceleracion", validarAceleracion, calcularAceleracion );


export default router;