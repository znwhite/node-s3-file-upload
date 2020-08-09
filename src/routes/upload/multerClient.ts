const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'us-west-1'
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'zw-test1',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: (req: any, file: any, cb: any) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req: any, file: any, cb: any) => {
      cb(null, 'files_from_node/' + Date.now().toString() + file.originalname)
    }
  })
})

module.exports = {
  upload
}