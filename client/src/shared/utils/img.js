import { IMG_CLOUD } from '@app/config/environment'

export const image = (imgId, width) => 
  width
    ? IMG_CLOUD + `/w_${width}/` + imgId
    : IMG_CLOUD + '/' + imgId
