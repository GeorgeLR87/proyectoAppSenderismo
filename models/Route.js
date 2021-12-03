const mongoose = require("mongoose")
const routeSchema = mongoose.Schema({
    title: String,
    state: String,
    town: String,
    altitude: Number,
    lodging: String,
    magicTown: String,
    hardness: Number,
    description: String,
    imgUrl1: String,
    imgUrl2: String,
    imgUrl3: String,
    imgUrl4: String,
    imgUrl5: String,
    imgUrl6: String,
    postedBy: String
},{
    timestamps:true
})

const Route = mongoose.model("Route", routeSchema)
module.exports = Route