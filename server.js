const express = require ('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure multer storage

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,'uploads/');
    },
    filename: (rea,file,cb) =>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000000);
        cb(null, uniqueSuffix + path.extnma(file.originalmane));
    },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'),(req,res) =>{
if(!req.file){
    return res.status(400).send('Nenhum ficheiro enviado. *Sixx_Gil*');
}

res.send({
    message: 'Imagem recebida e guardada com sucesso',
    filename: req.file.filename,
    path: req.file.path,
});
});

const PORT = 3000;
app.listen(PORT, () => {

console.log(`Servidpr a funcionar em http://localhost:${PORT}`);

});