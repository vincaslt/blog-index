import * as Jimp from 'jimp'
import * as uuid from 'uuid/v4'
import * as path from 'path'
import * as mimeTypes from 'mime-types'
import { config } from '../config'

export class PhotoService {

  public static async savePhoto(
    buffer: Buffer,
    mime: string
  ) {
    const extension = mimeTypes.extension(mime)
    if (!extension) {
      throw new Error('Photo has invalid mime type')
    }
    const filename = `${uuid()}.${extension}`
    const filePath = path.join(config.PHOTO_DEST, filename)
    const photo = await Jimp.read(buffer)
    await new Promise<Jimp>((resolve, reject) => {
      photo
        .resize(1024, 720)
        .quality(60)
        .write(filePath, (error, image) => error ? reject(error) : resolve(image))
    })
    return { filename }
  }

}