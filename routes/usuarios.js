const { Router } = require('express');
const router = Router();

const usuarios = require('../controllers/usuarios');

router.get('/', usuarios.usuariosGet)
router.put('/:id', usuarios.usuariosPut)
router.post('/', usuarios.usuariosPost)
router.delete('/', usuarios.usuariosDelete)
router.delete('/', usuarios.usuariosPatch)

module.exports = router;