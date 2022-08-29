module.exports = (app)=>{
    //definir a resposta para req
    app.get('/generic',(req,res)=>{
        res.render('generic.ejs')
    })
}