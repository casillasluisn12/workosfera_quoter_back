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
  isCow:{
    type:Boolean
  },
  weHave:{
    type:Boolean
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
  room:{
    type:String
  },
  matchingRooms:{
    type:Array
  },
  total:{
    type:Number
  },
  snackBaskets:{
    type:Array
  },
  people:{
    type:Number,
    default:1,
    min:1
  },
  comments:{
    type:String
  },
  folio:{
    type:String
  },
  invoice:{
    type:Boolean,
    default:false
  },
  rfc:{
    type:String
  },
  nameTax:{
    type:String
  },
  lastTax:{
    type:String
  },
  razonSocial:{
    type:String
  },
  calle:{
    type:String
  },
  numExt:{
    type:String
  },
  numInt:{
    type:String
  },
  codigoPostal:{
    type:String
  },
  municipio:{
    type:String
  },
  colonia:{
    type:String
  },
  banco:{
    type:String
  },
  digitosB:{
    type:String
  },
  commentsTax:{
    type:String
  }


}, {

  versionKey: false,
  usePushEach: true
})

export default mongoose.model('Quote', QuoteSchema)
