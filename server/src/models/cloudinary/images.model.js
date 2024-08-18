import fs from 'node:fs/promises'
import { deleteImage, uploadImage } from '#helpers/cloudinary.js'
import { CLOUDINARY_FOLDERS } from '#config/settings.js'

export default class ImageModel {

  static uploadImage = async (files) => {
    if (!files) return

    try {
      const imageName = Object.keys(files)[0]
      const imageData = files[imageName].tempFilePath

      const { public_id, version } = await uploadImage(imageData, CLOUDINARY_FOLDERS.users[imageName])
      await fs.unlink(imageData)

      return { 
        [imageName]: { 
          public_id, 
          version 
        } 
      }
    } 
    catch (error) {
      return { error: 'Something was wrong' }
    }
  }

  static deleteImage = async (public_id) => {
    try {
      await deleteImage(public_id)
      return { ok: true }
    } 
    catch (error) {
      return { error: 'Something was wrong' }
    }
  }

}