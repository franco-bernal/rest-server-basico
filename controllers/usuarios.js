const { response, request } = require('express')

const usuariosGet = (req=request, res = response) => {

    const query = req.query;

    res.json({
        peticion: "get desde  controlador",
        query
    })
}
const usuariosPut = (req, res) => {
    const id = req.params.id

    res.json({
        peticion: "put desde controlador",
        id
    })
}
const usuariosPost = (req, res) => {

    const {nombre, edad} =req.body;
        res.json({
            peticion: "post controller",
            nombre, edad
        })
}
const usuariosDelete = (req, res) => {
    res.json({
        peticion: "delete controller"
    })
}
const usuariosPatch = (req, res) => {
    res.json({
        peticion: "patch controller"
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}