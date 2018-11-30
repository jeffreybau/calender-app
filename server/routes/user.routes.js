var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt');
let user = require('../models/users.model');

router.post('/signup',(req,res)=>{
    user.getByUsername(req.body.username, (err, results)=>{
        if(err) return res.status(402).send({err:err});
        if(results.length > 0) {
         console.log(results)
            return res.status(402).send({err: 'user name hes already been taken'})
        }
        var hash = bcrypt.hashSync(req.body.password, 10);
        let newUser = {username: req.body.username, password: hash, firstname: req.body.firstName, lastname: req.body.lastName}
        user.addUser(newUser, (err, result)=>{
            if(err) return res.status(402).send({err: err});
            res.send({success: 'success!'});
        })
    })
})

router.post('/login', (req,res)=>{
    user.getByUsername(req.body.username, (err, results)=>{
        if(err) return res.send(402).send({err:err})

        if(results.length == 0){
            bcrypt.compareSync('lainTextPassword', 'hashedValuedFormDB')
            return res.status(402).send({err: 'incorrect username / password'})
        }
        let matching = bcrypt.compareSync(req.body.password, results[0].password)
        if(matching) return res.send({succsess: result[0]});
        return res.status(402).send({err: 'Incorrect username/password'})
    })
})

router.get('/all', async (req,res)=>{
    user.getAll((err,results)=>{
        if(err) return res.status(402).send({err:err});
        return res.send(results);
    })
})

router.get('/byid/:id', (req,res)=>{
    user.getById(req.params.id, (err, results)=>{
     if(err) return res.status(402).send({err:err});
     return res.send(results);
    })
 })

module.exports = router;