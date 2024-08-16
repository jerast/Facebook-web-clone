import AuthModel from '#models/mongodb/auth.model.js'
import userValidator from '#validators/user.validator.js'

export default class AuthController {

  static loginUser = async (req, res) => {
    const { user, password } = req.body

    // if (validate.error) return res.status(422).json({
    //   ok: false,
    //   error: validate.error.issues
    // })

    const result = await AuthModel.loginUser({ user, password })
    
    return res.status(result.ok ? 200 : 404).json(result)
  }

  static renewToken = async (req, res) => {
    const { uid } = req.session

    const result = await AuthModel.renewToken(uid)

    return res.status(result.ok ? 200 : 500).json(result)
  }
  
}