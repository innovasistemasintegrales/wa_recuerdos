const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
    /* let sesion;

    if(req.cookies){
        if(req.cookies.sesion){
            sesion = JSON.parse(req.cookies.sesion);
        }
    }
    
    if(sesion){
        db.collection("personas").where('id', '==', sesion.id).get().then(persona=>{
            let usuario = persona.docs[0].data();

            if(usuario){
                if(usuario.rol=='1'){
                    res.redirect('/administrador');
                } else if(usuario.rol=='2'){
                    res.redirect('/vendedor');
                } else if(usuario.rol=='3'){
                    res.redirect('/cliente');
                } else {
                    res.redirect('/logout');
                }
            } else {
                res.redirect('/logout');
            }
        });
    } else {
        res.render('index');
    } */
});

router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/administrador', (req, res) => {
    res.render('administrador');
});

// router.get('/mi-galeria', (req, res) => {
//     res.render('pages/mi-galeria', {
//         titulo: 'Mi Galeria',
//         userName: 'Pepito',
//         script: 'mi-cuenta',
//     });
// });

router.get('/amigo', (req, res) => {
    const archivosEncontrados = [
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-0.jpg',
            nombreImagen: 'Vista al mar',
        },
        {
            extension: 'png',
            privacidad: 'share-fill',
            portada: 'img/portada-archivo-1.jpg',
            nombreImagen: 'Un dia de playa',
        },
        {
            extension: 'mp4',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-2.jpg',
            nombreImagen: 'La familia',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
        {
            extension: 'jpg',
            privacidad: 'lock-fill',
            portada: 'img/portada-archivo-3.jpg',
            nombreImagen: 'Boda de amigos',
        },
    ];

    const albumenEncontrados = [
        {
            elementosEnAlbum: '12',
            privacidad: 'share-fill',
            nombreAlbum: 'Una boda no mas',
        },
        {
            elementosEnAlbum: '2',
            privacidad: 'lock-fill',
            nombreAlbum: 'Dia de playa',
        },
        {
            elementosEnAlbum: '21',
            privacidad: 'share-fill',
            nombreAlbum: 'Fiesta del año',
        },
    ];

    res.render('amigo', {
        userName: 'Pepito',
        totalArchivos: `${archivosEncontrados.length} ${archivosEncontrados.length === 0 || archivosEncontrados.length >= 2 ? ' Elementos' : ' Elemento'}`,
        archivos: archivosEncontrados,

        totalAlbumes: `${albumenEncontrados.length} ${albumenEncontrados.length === 0 || albumenEncontrados.length >= 2 ? ' Albumes' : ' Album'}`,
        albumes: albumenEncontrados,
    });
});

module.exports = router;
