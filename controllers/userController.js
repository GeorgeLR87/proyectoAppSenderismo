// ./controllers/usersController.js
const Perfil   = require('./../models/Perfil')
const Route = require('./../models/Route')


exports.getProfile = async (req, res) => {
	const idUsuario = req.session.currentUser._id
	const profileCreate = await Perfil.findOne({idUsuario})

		res.render("users/profile", {
		data: profileCreate
	})
}

exports.viewProfile = async (req,res) => {
	const user = await Perfil.findById(req.session.currentUser._id)
	res.render("users/create", {
		data:user
	})
}

exports.createProfile = async (req, res) => {
	
	
	const photo    = 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'   
	const nombre   = req.body.nombre     
	const apellido = req.body.apellido     
	const usuario  = req.body.usuario     
	const edad     = req.body.edad     
    const pais     = req.body.pais     
    const nivel    = req.body.nivel  
    const idUsuario= req.session.currentUser._id  
	
	 
	const newperfil = await Perfil.create({
			photo,
			nombre,
			apellido,
			usuario,
			edad,
			pais,
			nivel,
			idUsuario 
			})
		
		
			res.redirect('/users/profile',)	
	}


	exports.viewEditProfile = async (req, res) => {

		const profileID = req.params.profileID
	
		const foundProfile = await Perfil.findById(profileID)
	
		res.render("users/edit", {
			data: foundProfile
		})
	
	}

	exports.editProfile = async (req, res) => {
		const profileID = req.params.profileID
		const photo    = req.body.photo     
		const nombre   = req.body.nombre     
		const apellido = req.body.apellido     
		const usuario  = req.body.usuario     
		const edad     = req.body.edad     
    	const pais     = req.body.pais     
    	const nivel    = req.body.nivel 
    	const idUsuario    = req.session.currentUser._id  
		
		
		const updatedProfile = await Perfil.findByIdAndUpdate(
			
			profileID,
			{photo, nombre, apellido, usuario, edad, pais, nivel,idUsuario },
			{new: true}
		)

		res.redirect(`/users/profile`)	
	}


	exports.deleteProfile = async (req, res) => {

		const profileID = req.params.profileID
	
		// 2. REALIZAMOS BORRADO EN BASE DE DATOS
		const deletedProfile = await Perfil.findByIdAndDelete(profileID)
	
		console.log("Borrado de Perfil:", deletedProfile)
	
		// 3. REDIRECCIÓN
		res.redirect("/users/profile")
	 }   
  

//CREATE ROUTE- VIEWS
exports.createRouteView = async(req, res)=>{
    res.render('users/myRoute')
}

exports.createUserRoute = async (req, res)=>{
    
    const title = req.body.title
    const state = req.body.state
    const town = req.body.town
    const altitude = req.body.altitude
    const lodging = req.body.lodging
    const magicTown = req.body.magicTown
    const hardness = req.body.hardness
    const description = req.body.description
    const imgUrl1 = req.body.imgUrl1
	const imgUrl2 = req.body.imgUrl2
	const imgUrl3 = req.body.imgUrl3
	const imgUrl4 = req.body.imgUrl4
	const imgUrl5 = req.body.imgUrl5
	const imgUrl6 = req.body.imgUrl6
    const postedBy = req.session.currentUser.username
    //const idOwner = req.session.currentUser._id
     const newRouteCreated = await Route.create({title, state, town, altitude, lodging, magicTown, hardness, description, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6, postedBy})
    //console.log("nueva ruta en DB:", newRouteCreated)


    res.redirect('/createdRoutes/allRoutes')
}


//EDIT ROUTE- VIEWS
exports.viewEditUserRoute = async (req, res) =>{
   const singleRouteID = req.params.routeID
   const foundRoute = await Route.findById(singleRouteID)
    
   res.render('createdRoutes/editMyRoute',{
       data:foundRoute
   })
}

exports.editUserRoute = async (req, res) =>{
    const singleRouteID = req.params.routeID
    const title = req.body.title
    const state = req.body.state
    const altitude = req.body.altitude
    const lodging = req.body.lodging
    const magicTown = req.body.magicTown
    const hardness = req.body.hardness
    const description = req.body.description
    const imgUrl = req.body.imgUrl

    const updatedUserRoute = await Route.findByIdAndUpdate(
        singleRouteID,
        {title, state, altitude, lodging, magicTown, hardness, description, imgUrl},
        {new:true})
    res.redirect(`/createdRoutes/${updatedUserRoute._id}`)
 }
 

//DELETE ROUTE- VIEWS

exports.deleteUserRoute = async (req, res) =>{
    const singleRouteID = req.params.routeID
    
    const deletedSingleRoute = await Route.findByIdAndDelete(singleRouteID)
    console.log("Ruta eliminada:", deletedSingleRoute)
    res.redirect('/createdRoutes/allRoutes')
}

