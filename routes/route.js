const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function (req, res) {
    res.send(['bloodshot','3 idiots','PK','zero'])
});
router.get('/movies/:moviesIndex', function (req, res) {
    let movies=(['bloodshot','3 idiots','PK','zero'])
    let index=req.params.moviesIndex
    let movieAtIndex=movies[index]
    if (index<=movieAtIndex){
        res.send(movieAtIndex)
        }else {
        res.send("enter vaild index")
         }               
});
router.get('/films', function (req, res) {
    res.send ([{
        'id': 1,
        'name': 'BloodShot'
       }, {
        'id': 2,
        'name': 'Alpha'
       }, {
        'id': 3,
        'name': 'PK'
       }, {
        'id': 4,
        'name': 'Petter Rabbit'
       }])
       


})
router.get('/films/:filmId', function(req, res) {
    let movies= [{
        'id': 1,
        'name': 'BloodShot'
       }, {
        'id': 2,
        'name': 'Alpha'
       }, {
        'id': 3,
        'name': 'PK'
       }, {
         id: 4,
        'name': 'Peter Rabbit'
       }]
       let id= req.params.filmId
       for(let i=0;i<movies.length;i++){
       if(id==movies[i].id){
           res.send(movies[i])
       }else{
           res.send('invaild Id')
       }
       }   
})

module.exports = router;
