const express = require("express");
const router = express.Router(); // Use Router instead of express()

const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");

const tokenController = require('../controller/tokenController');

router.use(bodyParser.urlencoded({ extended: true }));


const publicDirectoryPath = path.join(__dirname, '..', 'public');

router.use(express.static(publicDirectoryPath));
console.log(publicDirectoryPath)
// Define multer disk storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(publicDirectoryPath, 'uploads')); // Correctly resolve uploads directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Initialize multer middleware with the configured storage engine
const upload = multer({ storage: storage });

// Define route to handle file upload
router.post('/importToken', upload.single('file'), tokenController.importToken);
router.get('/insertToken', tokenController.insertToken);
module.exports = router;
