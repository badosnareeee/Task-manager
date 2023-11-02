const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "product name must be provided"],
    },
    price: {
        type:Number,
        required: [true, "product price must be provided"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['apple','samsung','xaoimi','google','nokia'],
            message: '${VALUE} iw not supported'
        }
    }
})

module.exports = mongoose.model('Product', ProductSchema)