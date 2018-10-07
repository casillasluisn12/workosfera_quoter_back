import mongoose from 'mongoose'
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
  dateReserved: {
    type: Date,
    default: Date.now()
  },
  initialTime:{
    type:String
  },
  hourCount: {
    type: Number,
    default: 1
  },
  name: {
    type: String
  },
  last: {
    type: String
  },
  email: {
    type: String,
    required: [true,'correo electrónico requerido']
  },
  phone: {
    type: String,
    validate:{
      validator:function(tel){
        return /^\d{10}$/.test(tel);
      },
      message:props=>`${props.value} no son 10 dígitos`
    },
    required: [true,'Teléfono requerido']
  },
  company:{
    type:String,
  },
  paymentMethod:{
    type:String,
    default:'cash'
  },
  invoice:{
    type:Boolean,
    default:false
  },
  room:{
    type:String
  },
  possibleRooms:{
    type:Array
  },
  people:{
    type:Number,
    default:1,
    min:1
  },
  snacks:{
    type:Number,
    deafult:0
  },
  comments:{
    type:String
  },
  folio:{
    type:String
  }


}, {

  versionKey: false,
  usePushEach: true
})

export default mongoose.model('Quote', QuoteSchema)
