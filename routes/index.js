const router = require("express").Router();
const multer = require("multer");
const { ImageUpload } = require("../controller");

//store image in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//middleware function to upload single image

router.post("/upload", upload.single("image"), ImageUpload);

module.exports = router;
