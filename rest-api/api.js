const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const api = express();
const porta = 4000;

const router = express.Router();
const produtoRouter = require('./router/produtoRouter');

api.use(cors());

api.use(bodyparser.urlencoded({extended: true}))
api.use(bodyparser.json({limit: '20mb', extended: true}));

api.use('/public', express.static(`${__dirname}/public`))

router.get('/', (req, resp) => {
  resp.json({mensagem: '=> API Online'});
})
api.use('/', router);
api.use('/produto', produtoRouter);

api.listen(porta);
console.log('Run API Express');