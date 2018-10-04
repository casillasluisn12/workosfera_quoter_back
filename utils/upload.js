import cloudinary from 'cloudinary'
import connect from 'connect-multiparty'
import { CLOUDINARY_CREDENTIALS } from '../config/cloudinary'

cloudinary.config(CLOUDINARY_CREDENTIALS)
const fileParser = connect()

export { cloudinary, fileParser };
