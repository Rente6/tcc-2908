module.exports = (app)=>{
    //definir a resposta para req
    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })
}