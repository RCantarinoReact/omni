const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express();

mongoose.connect('mongodb+srv://cantarino:crcwifi123@cluster0-isxtc.mongodb.net/OminiStack?retryWrites=true&w=majority&readPreference=secondary&ssl=true',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

//req.body = acessa o corpo da requisicao
//req.params = acessa route params {edicao, deleção}
//req.query = acessa o queryString da requisicao { filtros }
app.use(cors());
app.use(express.json())
app.use('/files' , express.static(path.resolve(__dirname, '..' , 'upload')))
app.use(routes);

app.listen(3333);

