import { IMG_CLOUD } from '@app/config/environment'

export const getImage = (imgId, width, height) => {
	const imgWidth = width ? `/w_${width}` : ''
	const imgHeight = height ? `/h_${height}` : ''

	return IMG_CLOUD + imgWidth + imgHeight + '/' +imgId
}