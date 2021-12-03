
// ./routes/users.js
// 1. IMPORTACION
const express		= require("express")
const router		= express.Router()
const usersController	= require("./../controllers/userController")
const routeGuard	= require("./../middlewares/route-guard")



// 2. RUTEO
router.get("/create", routeGuard.usuarioLoggeado, usersController.viewProfile)
router.post("/create",routeGuard.usuarioLoggeado, usersController.createProfile)

router.get("/profile", usersController.getProfile)
router.get("/:profileID/edit", usersController.viewEditProfile)

router.post("/:profileID/edit",routeGuard.usuarioLoggeado, usersController.editProfile)
router.post("/:profileID/delete",routeGuard.usuarioLoggeado, usersController.deleteProfile)

module.exports = router

//create new Routes
router.get("/myRoute", routeGuard.usuarioLoggeado, usersController.createRouteView)
router.post("/myRoute", routeGuard.usuarioLoggeado, usersController.createUserRoute)

//Edit my routes
router.get("/:routeID/editMyRoute", routeGuard.usuarioLoggeado, usersController.viewEditUserRoute)
router.post("/:routeID/editMyRoute", routeGuard.usuarioLoggeado, usersController.editUserRoute)

//Delete my routes
router.post("/:routeID/deleteRoute",  routeGuard.usuarioLoggeado, usersController.deleteUserRoute )

