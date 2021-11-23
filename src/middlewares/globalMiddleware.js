



let checkHeader = function(req, res, next){
    let headerValue= req.headers['isfreeapp']
   // req.isFreeApp=
    if(!headerValue){
        res.send({error: 'header is not present'})
        
     }else{
        console.log('hello this is middelware')
        next()
        
       
       
    }
}

//module.exports.captureInfo = captureInfo
module.exports.checkHeader=checkHeader