import userValidator from '#validators/user.validator.js'
import UserModel from '#models/mongodb/users.model.js'
import ImageModel from '#models/cloudinary/images.model.js'

export default class UserController {

  static createUser = async (req, res) => {
    const data = userValidator.full(req.body)
    if (data.error) return res.status(422).json({
      ok: false,
      error: data.error.issues
    })

    const result = await UserModel.createUser(data.data)
    
    return res.status(result.ok ? 200 : 404).json(result)
  }
  
  static updateUser = async (req, res) => {
    const { body, files } = req
    const { id } = req.params
    
    if ( !Object.keys(body).length && !files ) return res.status(422).json({
      ok: false,
      error: 'No data uploaded'
    })

    const data = userValidator.partial(body)
    if (data.error) return res.status(422).json({
      ok: false,
      error: data.error.issues
    })

    const image = await ImageModel.uploadImage(req.files)
    if ( image?.error ) return res.status(422).json({
      ok: false,
      error: image.error
    })

    const result = await UserModel.updateUser({ ...data.data, ...image, id })

    return res.status(result.ok ? 200 : 404).json(result)
  }
  
}