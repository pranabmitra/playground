const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

function fileFilter (req, file, callback) {
    let ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        console.log('Only images are allowed!');
        return callback(new Error('Only images are allowed'))
    }

    return callback(null, true);  
}

const Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const upload = multer({
    storage: Storage,
    fileFilter: fileFilter
}).array("myFile", 5); //Field name and max count

/* serve index page */
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

/* api/upload */
app.post("/api/upload", function (req, res) {
    upload(req, res, function (err) {
        // if (err) throw err;
        if (err) {
            return res.end(`${err}`)
        }

        res.send("File uploaded successfully.");
    })
});

app.listen(9000, function() {
    console.log("Listening to port 9000");
});


