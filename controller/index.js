const sharp = require("sharp");
const crypto = require("crypto");
const { uploadFile, getObjectSignedUrl } = require("../s3");

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

exports.ImageUpload = async (req, res) => {
  try {
    const file = req.file;
    const imageName = generateFileName();
    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer();
    await uploadFile(fileBuffer, imageName, file.mimetype);
    const url = await getObjectSignedUrl(imageName);
    res.status(200).json({ message: "Upload Successfully..!" });
  } catch (error) {
    console.log(error);
  }
};
