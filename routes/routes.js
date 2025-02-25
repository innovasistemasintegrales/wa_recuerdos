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
// router.get('/amigo', (req, res) => {
//   res.render('pages/amigo');
// });

router.get('/mi-galeria', (req, res) => {
    res.render('pages/mi-galeria', {
        titulo: 'Mi Galeria',
        userName: 'Pepito',
        script: 'mi-cuenta',
    });
});

router.get('/mis-albumes', (req, res) => {
    res.render('pages/mis-albumes', {
        titulo: 'Mis Albumes',
        userName: 'Pepito',
        script: 'mi-cuenta',
    });
});

module.exports = router;
