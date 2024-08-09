import fs from 'node:fs/promises'
import { uploadImage } from '#helpers/cloudinary.js'
import { CLOUDINARY_FOLDERS } from '#config/settings.js'

export default class ImageModel {

  static uploadImage = async (files) => {
    if (!files) return

    try {
      const imageName = Object.keys(files)[0]
      const imageData = files[imageName].tempFilePath

      const { public_id } = await uploadImage(imageData, CLOUDINARY_FOLDERS.users[imageName])
      await fs.unlink(imageData)

      return { [imageName]: public_id }
    } 
    catch (error) {
      return { error: 'Something was wrong' }
    }
  }

}