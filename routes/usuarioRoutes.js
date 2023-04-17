import express  from "express";
const router = express.Router();
import { 
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    perfil
} from '../controllers/usuarioController.js'

import checkAuth from "../middleware/checkAuth.js"

// Autentificacion, registro y confirmacion de usuarios
router.post('/', registrar); // Crea un nuevo usuario
router.post('/login', autenticar); // Crea un nuevo usuario
router.get('/confirmar/:token', confirmar); // Confirmar un nuevo usuario
router.post('/olvide-password', olvidePassword); // Recuperar password usuario
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword) // Crear nuevo password usuario


router.get('/perfil', checkAuth, perfil);


export default router;