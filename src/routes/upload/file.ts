import express, { Response } from 'express';
const router = express.Router()
const { upload } = require('./multerClient');

// Upload a file
router.post('/', upload.array('inputFile', 3), (req: any, res: Response) => {
  if (!req.files) res.status(400).json({ error: 'No files were uploaded.' });

  res.status(201).json({
    message: 'Successfully uploaded ' + req.files.length + ' files!',
    files: req.files
  })
})

module.exports = router