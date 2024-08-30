import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_CLOUD, CLOUDINARY_KEY, CLOUDINARY_SECRET } from '#config/environment.js'

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD,
	api_key: CLOUDINARY_KEY,
	api_secret: CLOUDINARY_SECRET,
});

export const uploadImage = async (filePath, folder) =>
	await cloudinary.uploader.upload(filePath, { folder });

export const deleteImage = async (public_id) =>
	await cloudinary.uploader.destroy(public_id);
