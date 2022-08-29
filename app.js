//importar e config servidor
const {app,porta} = require('./config/servidor')

//executar o servidor
app.listen(porta,()=>{
    console.log('http://localhost:'+porta)
})